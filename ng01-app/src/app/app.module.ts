import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
/* App module is used to bundle the functionality of our app
  
*/
@NgModule({ // Decorator where you register your component
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent // Declare that ServerComponent is part of the module
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] //Recognizes AppComponent when it first starts
})
export class AppModule { }
