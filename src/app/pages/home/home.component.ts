import { Component} from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  galleryList: any[] = []; 
  reviewsList: any[] = [];
  servicesList: any[] = [];
  visaList: any[] = []

  selectedServices: string[] = [];

  constructor(
    public dbService: DbService, private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getDataFromDbService()
  }

  getDataFromDbService(){

    let visaSub = this.dbService.homeVisaSubject.subscribe((value) => {
      if(value.length !== 0){
        this.visaList = value
        this.dbService.getWindowRef().setTimeout(() => visaSub.unsubscribe(), this.dbService.timeoutInterval*60)
      }
    })

    let serviceSub = this.dbService.homeServiceSubject.subscribe((value) =>{
      if(value.length !== 0){
        this.servicesList = value
        this.dbService.getWindowRef().setTimeout(() => serviceSub.unsubscribe(), this.dbService.timeoutInterval*60)
      }
    })
  }

  form:FormGroup =  this.fb.group({
      to_name: 'Admin',
      from_name:['', Validators.required],
      from_contact:['', Validators.required],
      from_email:['', [Validators.required, Validators.email]],
      subject:'Query related to Immigration Services',
      message:['', Validators.required],
  })

  async sendEmail(){
    emailjs.init("sqvMUh9Bnm1aCw-2H");
    let response= await emailjs.send("service_3qa4jnb", "template_fl5z0wz", {
      to_name: this.form.value.to_name,
      from_name:this.form.value.from_name,
      from_contact:this.form.value.from_contact,
      from_email:this.form.value.from_email,
      subject: this.form.value.subject,
      message:this.form.value.message,
    });
    alert("Message has been sent");
    this.form.reset();
  }
}
