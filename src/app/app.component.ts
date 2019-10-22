import { Component } from '@angular/core';
import { RegisterUserService } from './service/register-user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  register : any;

  constructor(
    private registerUserService:RegisterUserService,
  ){  }

  ngOnInit(){
    this.register ={
      username :'',
      password :'',
      email    :'', 
    };
  }

  registerUser(){
    console.log('== In registerUser ==');
    this.registerUserService.registerUserservice(this.register).subscribe(
      result =>{
        alert('User' + this.register.username +'has been created !!');
      },
      error=>{
        console.log('Error ->',error);
      }
    );
  }
}
