import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageCreationComponent } from './components/message-creation/message-creation.component';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageCreationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
