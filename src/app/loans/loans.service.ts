import { Loan } from "./loan.model";
import { Subject } from 'rxjs';

export class LoansService {

    loansChanged = new Subject<Loan[]>();
    
    loans: Loan[] = [
        new Loan(1, 'Syed', 'Sheik', 424642),
        new Loan(2, 'Ali', 'Sheik', 464246),
        new Loan(3, 'Fathima', 'Sheik', 642464)
    ];

    getLoanList() {
        return this.loans.slice();
    }

    getLoanByIndex(index: number) {
        return this.loans[index];
    }

    getLoanByAccount(accNumber: number) {
        // return this.loans.forEach(loanItem => {
        //     if(loanItem.)
        // });
        // for(loan:Loan in loans)
    }
        findLoan(findBy:string, findText: string) {
            var foundLoan = this.loans.find(function(loan, index) {
                if(findBy === "accountNumber") {
                    if(loan.accountNumber === +findText) {
                        return true;
                    }
                } else if(findBy === "firstName") {
                    if(loan.firstName === findText) {
                        return true;
                    }
                } else if(findBy === "lastName") {
                    if(loan.lastName === findText) {
                        return true;
                    }
                } else if(findBy === "amount") {
                    if(loan.amount === +findText) {
                        return true;
                    }
                }
            });
            //return foundLoan;
            //console.log("SAF: Found Loan is "+foundLoan.accountNumber);
            this.loans = [];
            this.loans.push(foundLoan);
            this.loansChanged.next(this.loans.slice());
        }

      addLoan(loan: Loan) {
        this.loans.push(loan);
        this.loansChanged.next(this.loans.slice());
      }
    
      updateLoan(index: number, newLoan: Loan) {
        this.loans[index] = newLoan;
        this.loansChanged.next(this.loans.slice());
      }
    
      deleteLoan(index: number) {
        this.loans.splice(index, 1);
        this.loansChanged.next(this.loans.slice());
      }
}