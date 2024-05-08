import { Component} from '@angular/core';
import { DbService } from 'src/app/service/db.service';

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
    public dbService: DbService
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
}
