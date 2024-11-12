import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  //standalone: true,
 // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.get<any[]>('https://fakestoreapi.com/users').subscribe(users => {
      const user = users.find(u => u.username === this.username && u.password === this.password);
      
      if (user) {
         
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid username or password');
      }
    });
  }
}
