import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  public user:any = {
    name:"",
    email:"",
    password:"",
    address:""
  };

  constructor(private http:HttpClient){}

  public addUser(){
    this.http.post("http://localhost:8080/user/add-user",this.user).subscribe((data)=>{
        alert("User Added!!!!");
    })
  }

  clearFields(){
    
  }
}
