import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  enrolForm: FormGroup;
  id: any;
  constructor(private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private enrollService: EnrollService,
    private router: Router) { 
    this.enrolForm = this.formBuilder.group({
      'id': [null, Validators.compose([Validators.required])],
      'name': [null, Validators.compose([Validators.required])],
      'active': [null, Validators.compose([Validators.required])],
      'dateOfBirth': [null, Validators.compose([Validators.required])]
    });

    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.getEnroll(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getEnroll(id: string){
    this.enrollService.getEnrollById(id)
    .subscribe(
      (data: any) => {
        data  = data || {};
        this.enrolForm.patchValue(data);
      }
    )
  }

  updateEnroll(){
    this.enrollService.updateEnrollById(this.id, this.enrolForm.value)
    .subscribe(
      (data: any) => {
        this.router.navigateByUrl('/list');
        alert("Successfully Updated");
      }
    )
  }

}
