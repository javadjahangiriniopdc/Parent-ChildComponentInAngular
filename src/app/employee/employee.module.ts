import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';



@NgModule({
    declarations: [EmployeeComponent, EmployeeListComponent, EmployeeDetailComponent],
    exports: [
        EmployeeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class EmployeeModule { }
