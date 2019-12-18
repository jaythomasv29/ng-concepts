import { Component, OnInit } from '@angular/core';
import { SelectorListContext } from '@angular/compiler';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
description:string = ''
tickets = []
addedTicket:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addTicket(){
    this.tickets.push(this.description)
    console.log('ticket added', this.tickets)
    this.addedTicket = true
    this.description= ''
    setTimeout(() => {
      this.addedTicket = false
    },2000)
  }

  delete(event, item){

    const liText = (event.target.parentElement.textContent.split(" ")[0])
    const position = this.tickets.indexOf(liText)
    this.tickets.splice(position, 1)
    

    
  }
}
