import { Component } from '@angular/core';
import { DbService } from 'src/app/service/db.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  servicesList: any[] = []
  serviceModelList: any[] = []
  testimonialList: any[] = []
  videosList: any[] = [];


  constructor(
    public dbService: DbService
  ){ }

  ngOnInit(): void {
    this.getInitialData()
    this.getTestimonials()
  }

  getInitialData() {
    let sub = this.dbService.homeServiceSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.servicesList = [...value];
        this.getRemainingData();
        this.dbService.getWindowRef().setTimeout(() => sub.unsubscribe(), this.dbService.timeoutInterval * 6) // 60 seconds
      }
    })

    let videoSub = this.dbService.homeVideosSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.videosList = value;
        this.dbService.getWindowRef().setTimeout(() => videoSub.unsubscribe(), this.dbService.timeoutInterval * 60)
      }
    })

  }

  getRemainingData() {
    this.dbService.getAllServices();
    let sub = this.dbService.serviceSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.servicesList = this.servicesList.concat(value);
        this.dbService.getWindowRef().setTimeout(() => sub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }

  getTestimonials() {
    this.dbService.getTestimonials();
    let sub = this.dbService.testimonialSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.testimonialList = this.testimonialList.concat(value);
        this.dbService.getWindowRef().setTimeout(() => sub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }
}
