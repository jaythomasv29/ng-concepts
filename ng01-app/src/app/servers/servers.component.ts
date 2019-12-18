import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName:string
  serverStatus: string

  constructor() { 
    // a method executed at the point of time this componenet is created by angular
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  add(){
    alert("server added")
  }
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created: Details: ${this.serverName}`
    setTimeout(()=> {
      this.serverCreationStatus = "Ready to create new server"
    },2000)
  }

  // onUpdateServerName(event){
  //   console.log(event.target.value)
  //   this.serverName = (event.target.value)
  // }
}
