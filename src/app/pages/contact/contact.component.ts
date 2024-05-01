import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from'@angular/forms';
import { Firestore, Timestamp, collection, doc, getDoc, setDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage='';

  constructor(private formBuilder:FormBuilder, private firestore: Firestore){}


  ngOnInit(){
    this.contactForm = this.formBuilder.group({
      full_name:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      phone_number:["", Validators.required],
      message:["", Validators.required]
    })
  }
  submitData(value:any){
    let formValues = value;
    let docRef;

    docRef = doc(collection(this.firestore, "contact"));

    setDoc(docRef, formValues)
      .then(() => { 
        console.log("Submitted Successfully");
        this.isSubmit = true;
        this.submitMessage ="Submitted Successfully";
        setTimeout(()=>{
            this.isSubmit= false
          }, 5000)
      })
      .catch(error => {
        console.error("Error saving response data to Firestore: ", error);
      });

  }
}
