import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  bsInlineValue = new Date();
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) {}
   

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/usernotes');
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}
