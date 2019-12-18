import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  servers = [
    {
      serverId: 1,
      serverStatus: 'offline'
    },
    {
      serverId: 2,
      serverStatus: 'offline'
    },
    {
      serverId: 3,
      serverStatus: 'offline'
    },
    {
      serverId: 4,
      serverStatus: 'offline'
    },
    
  ]

  constructor() {}

   
  ngOnInit() {
  }

}
