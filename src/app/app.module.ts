import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { MyModule } from './my/my.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    MyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
