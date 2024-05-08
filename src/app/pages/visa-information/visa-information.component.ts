import { Component } from '@angular/core';
import { DbService } from 'src/app/service/db.service';


@Component({
  selector: 'app-visa-information',
  templateUrl: './visa-information.component.html',
  styleUrls: ['./visa-information.component.css']
})
export class VisaInformationComponent {
  visaList: any[] = []
  
  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getInitialData()
  }

  getInitialData() {
    let sub = this.dbService.homeVisaSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.visaList = [...value];
        this.getRemainingData();
        this.dbService.getWindowRef().setTimeout(() => sub.unsubscribe(), this.dbService.timeoutInterval * 6) // 60 seconds
      }
    })
  }

  getRemainingData() {
    this.dbService.getAllVisas();
    let sub = this.dbService.visaSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.visaList = this.visaList.concat(value);
        this.dbService.getWindowRef().setTimeout(() => sub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }

}
