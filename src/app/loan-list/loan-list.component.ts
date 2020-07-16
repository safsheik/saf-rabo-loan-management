import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Loan } from '../loan.model';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  @Input() userRole;
  @Output() loanWasSelected = new EventEmitter<Loan>();
  loans: Loan[] = [
    new Loan('Syed', 'Sheik', '464246'),
    new Loan('Ali', 'Sheik', '424642'),
    new Loan('Fathima', 'Sheik', '464264')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onLoanSelected(loan: Loan) {
    this.loanWasSelected.emit(loan);
   }
 

}
