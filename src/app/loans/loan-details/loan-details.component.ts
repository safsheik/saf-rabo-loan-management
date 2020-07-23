import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Loan } from '../loan.model';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  loan: Loan;
  id: number;

  constructor(private loansService: LoansService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.loan = this.loansService.getLoanByIndex(this.id);
      }
    );
  }

  onModifyLoan() {
    this.router.navigate(['modify'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
