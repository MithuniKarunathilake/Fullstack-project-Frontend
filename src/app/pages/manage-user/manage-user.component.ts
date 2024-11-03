import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css'
})
export class ManageUserComponent {

  constructor(private http:HttpClient){
    this.loadTable();
  }

  public userList:any=[];

  loadTable(){
    this.http.get("http://localhost:8080/user/get-user").subscribe(data=>{
      console.log(data);
      this.userList=data;
    })
  }

  deleteUserById(id:any){
    console.log(id);

    this.http.delete(`http://localhost:8080/user/delete-user/${id}`).subscribe(data=>{
      alert("User deleted !!!!");
      this.loadTable();
    })
    
}
public userTemp:any={}
updateUser(user:any){
  console.log(user);
  this.userTemp=user;
  
}

saveUser(){
  this.http.put("http://localhost:8080/user/update-user",this.userTemp).subscribe(data=>{
    alert("User Updated!!!!!")
  })
}
}

