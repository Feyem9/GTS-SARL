import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfacesComponent } from './Aouth/interfaces/interfaces.component';
import { DashBordComponent } from './dash-bord/dash-bord.component';
import { AouthModule } from './Aouth/aouth.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterfacesComponent,
    DashBordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AouthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
