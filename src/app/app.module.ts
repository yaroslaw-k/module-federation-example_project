import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ChildChildComponent } from './child-child/child-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildChildComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
