import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { LoanListComponent } from './loans/loan-list/loan-list.component';
import { LoanModifyComponent } from './loans/loan-modify/loan-modify.component';
import { LoanStartComponent } from './loans/loan-start/loan-start.component';
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';
import { LoanItemComponent } from './loans/loan-list/loan-item/loan-item.component';
import { LoansService } from './loans/loans.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindLoanComponent } from './loans/find-loan/find-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    LoanListComponent,
    LoanModifyComponent,
    LoanStartComponent,
    LoanDetailsComponent,
    LoanItemComponent,
    FindLoanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
