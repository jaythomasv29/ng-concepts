import { Component, OnInit } from '@angular/core';
// import { Server } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName: string = ''
  serverStatus: string = ''
  serverCreated: boolean = false;
  servers = [
    {
      serverName: "Jumanji",
      serverStatus: "Online"
    },
    {
      serverName: "Leggo",
      serverStatus: "Offline"
    },
    {
      serverName: "Mulan",
      serverStatus: "Offline"
    },
    {
      serverName: "Money 2",
      serverStatus: "Offline"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  addServer() {
    this.serverCreated = true;
    
    setTimeout(()=>{
      this.serverCreated = false;
      this.serverName = '';
      this.serverStatus = '';
    },2000)

    console.log(`${this.serverName} ${this.serverStatus}`)
  }
}
