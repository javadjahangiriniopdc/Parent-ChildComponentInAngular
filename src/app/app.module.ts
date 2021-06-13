import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeModule} from './employee/employee.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import {EmployeeDetailComponent} from './employee/employee-detail/employee-detail.component';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    BrowserAnimationsModule
  ],
  providers: [BsModalService, BsModalRef],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeDetailComponent]
})
export class AppModule {
}
