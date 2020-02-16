import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './expense-details/dashboard.component';
import { ExpenseDetailComponent } from './expense-details/transaction-form/transaction-form.component';
import { ExpenseDetailListComponent } from './expense-details/expense-detail-list/expense-detail-list.component';
import { ExpenseDetailService } from './shared/expense-detail.service';
import { EditModalComponent } from './expense-details/expense-detail-list/edit-modal/edit-modal.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CategoryListComponent } from './expense-details/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExpenseDetailComponent,
    ExpenseDetailListComponent,
    EditModalComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ExpenseDetailService, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
