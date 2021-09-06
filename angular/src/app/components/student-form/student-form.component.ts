import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  reactForm: FormGroup;
  student: Student = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    classroom: {
      _id: '',
      name: ''
    }
  };

  constructor(
    private studentService: StudentHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.studentService.getById(params.id).subscribe(
          item => {
            this.student = item;
          })
      })
  }

  saveStudent(ngForm: NgForm): void {
    this.studentService.update(ngForm.value, this.student._id).subscribe(() => {
      this.router.navigate(['student-list']);
    })
  }

}
