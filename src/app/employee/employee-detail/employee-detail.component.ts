import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Employee} from '../../employee';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeeDetailComponent implements OnInit {

  @Input() public employee: Employee;

  constructor(public bsModalRef: BsModalRef) {

  }

  ngOnInit(): void {
  }
}
