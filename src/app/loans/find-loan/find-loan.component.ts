import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoansService } from '../loans.service';

@Component({
  selector: 'app-find-loan',
  templateUrl: './find-loan.component.html',
  styleUrls: ['./find-loan.component.css']
})
export class FindLoanComponent implements OnInit {

  constructor(private loansService: LoansService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log("SAF: Search text "+value.searchBy);
    this.loansService.findLoan(value.searchBy,value.searchText);

  }

  onCancel() {
    //
  }

}
