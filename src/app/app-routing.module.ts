import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoanModifyComponent } from './loans/loan-modify/loan-modify.component';
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component'
import { FindLoanComponent } from './loans/find-loan/find-loan.component';
import { LoanStartComponent } from './loans/loan-start/loan-start.component';


const routes: Routes = [
  { path:'', redirectTo:'loans', pathMatch:'full' },
  { path:'loans', component: LoansComponent, children: [
    { path: '', component: LoanStartComponent },
    { path: 'new', component: LoanModifyComponent },
    { path: 'find', component: FindLoanComponent },
    { path: ':id', component: LoanDetailsComponent },
    { path: ':id/modify', component: LoanModifyComponent }
    
  ] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
