import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.toastr.success('User successfully created');
          this.service.formModel.reset();
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
              this.toastr.error('Username is already taken', 'Registration failed.');
              console.log('Username is already taken');
              break;

              default:
              this.toastr.error(element.description, 'Registration failed.');
              console.log('Registration failed');
              break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
