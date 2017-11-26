import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageCreationComponent } from './components/message-creation/message-creation.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { SocketService } from './services/socket.service';
import { LocalStorageService } from './services/localstorage.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageCreationComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SocketService,
    LocalStorageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
