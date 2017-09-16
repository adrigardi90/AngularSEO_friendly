import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'login-user',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.scss'],
})
export class LoginComponent {

  user: string;
  password: string;

  constructor(meta: Meta, 
              title: Title, 
              private router : Router) {

      this.user = this.password = '';
      
      title.setTitle('LOGIN PAGE');

      meta.addTags([
        { name: 'author',   content: 'ADRIAN'},
        { name: 'keywords', content: 'LOGIN'},
        { name: 'description', content: 'LOGIN PAGE DESCRIPTION' }
      ]);
  }

  submit(){
    this.router.navigate(['/home']);
  }
}
