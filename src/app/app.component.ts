import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpclient:HttpClient){
  }
  jsonPlaceArray:any = [];
  users:any = [];
  ngOnInit(): void {
  //   this.httpclient.get("https://jsonplaceholder.typicode.com/posts").subscribe((x)=>{
  //   this.jsonPlaceArray = x;
  // })

    this.httpclient.get("http://localhost:3000/users").subscribe((x)=>{
    //this.jsonPlaceArray = x;
    console.log(x);
    this.users = x;
  })


  }
}
