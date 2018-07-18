import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLogsComponent } from './admin-logs/admin-logs.component';
import { AdminManageUsersComponent } from './admin-manage-users/admin-manage-users.component';
import { AdminPayfixComponent } from './admin-payfix/admin-payfix.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LogsComponent } from './logs/logs.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { PayfixComponent } from './payfix/payfix.component';
import { SigninComponent } from './signin/signin.component';



const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'payfix', component: PayfixComponent },
  { path: 'manageusers', component: ManageUsersComponent },
  { path: 'logs', component: LogsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    PayfixComponent,
    AdminDashboardComponent,
    AdminComponent,
    AdminChangePasswordComponent,
    AdminPayfixComponent,
    AdminManageUsersComponent,
    AdminLogsComponent,
    DashboardComponent,
    ChangePasswordComponent,
    LogsComponent,
    ManageUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
