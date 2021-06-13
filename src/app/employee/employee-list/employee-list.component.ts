import {Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {EmployeeDetailComponent} from '../employee-detail/employee-detail.component';
import {Employee} from '../../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeeListComponent implements OnInit {

  @Input() public employees: Employee[] ;
  @Output() public employeeSelected = new EventEmitter<Employee>();
  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  selectEmployee(emp: Employee): any {
    this.employeeSelected.emit(emp);
    const initialState = {
      employee: emp
    };
    this.bsModalRef = this.modalService.show(EmployeeDetailComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
