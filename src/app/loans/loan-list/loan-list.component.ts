import { Component, OnInit, OnDestroy } from '@angular/core';

import { Loan } from '../loan.model';
import { LoansService } from '../loans.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit, OnDestroy {

  loans: Loan[];
  loanSubscription: Subscription;
  constructor(private loansService: LoansService,
              private router: Router,
              private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.loanSubscription = this.loansService.loansChanged
    .subscribe(
      (loans: Loan[]) => {
        this.loans = loans;
      }
    );
    this.loans = this.loansService.getLoanList();
  }

  onFetchAll() {
    this.loans = this.loansService.getLoanList();
    this.router.navigate(['loans']);
  }

  onNewLoan() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onFindLoan() {
    this.router.navigate(['find'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.loanSubscription.unsubscribe();
  }

}
