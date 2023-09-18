import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  username: string = '';
  password: string = '';

  onInputUser(): void {
    console.log(this.username);
  }
  onInputPass(): void {
    console.log(this.password);
  }

  onSubmit() {
    const url = 'https://fakestoreapi.com/auth/login';

    const loginData = {
      username: this.username,
      password: this.password,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post('https://fakestoreapi.com/auth/login', loginData).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
