import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { LoansService } from '../loans.service';

@Component({
  selector: 'app-loan-modify',
  templateUrl: './loan-modify.component.html',
  styleUrls: ['./loan-modify.component.css']
})
export class LoanModifyComponent implements OnInit {
  id: number;
  editMode = false;
  loanForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private loansService: LoansService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        //console.log("SAF: "+this.id);
        this.initForm();
      }
    );
  }

  onSubmit() {
    console.log(this.loanForm);
    console.log("SAF: Modify Flag"+this.editMode);
    if (this.editMode) {
      this.loansService.updateLoan(this.id, this.loanForm.value);
    } else {
      this.loansService.addLoan(this.loanForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let firstName = '';
    let lastName = '';
    let amount = 0;

    if(this.editMode) {
      const loan = this.loansService.getLoanByIndex(this.id);
      
      firstName = loan.firstName;
      lastName = loan.lastName;
      amount = loan.amount;
      console.log(loan.firstName);
    }
    this.loanForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'amount': new FormControl(amount, Validators.required)
    });
  }

}
