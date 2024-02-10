import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewheroeUaComponent } from './components/newheroe-ua/newheroe-ua.component';
import { EditheroeUaComponent } from './components/editheroe-ua/editheroe-ua.component';
import { HeroeUaComponent } from './components/heroe-ua/heroe-ua.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewheroeUaComponent,
    EditheroeUaComponent,
    HeroeUaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
