import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  enrolles: Array<any> = [];
  constructor(private enrollService: EnrollService) {

  }

  ngOnInit(){
    this.enrollService.getEnrollsList()
    .subscribe(
      (data: any) => {
        this.enrolles = data || [];
      }
    );
  }

}
