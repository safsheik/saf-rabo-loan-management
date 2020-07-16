import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Loan } from '../../loan.model';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  @Input() loan: Loan;
  @Output() loanSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.loanSelected.emit();
  }
}
