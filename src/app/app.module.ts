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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PayfixListItemComponent } from './payfix/payfix-list/payfix-list-item/payfix-list-item.component';
import { PayfixListComponent } from './payfix/payfix-list/payfix-list.component';
import { PayfixComponent } from './payfix/payfix.component';
import { SigninComponent } from './signin/signin.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPayfixComponent } from './user-payfix/user-payfix.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'payfix', component: PayfixComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'payfix', component: AdminPayfixComponent },
      { path: 'manageusers', component: AdminManageUsersComponent },
      { path: 'logs', component: AdminLogsComponent },
      { path: 'changepass', component: AdminChangePasswordComponent }
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'payfix', component: UserPayfixComponent },
      { path: 'changepass', component: UserChangePasswordComponent }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    PayfixComponent,
    PayfixListComponent,
    PayfixListItemComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AdminComponent,
    UserComponent,
    AdminChangePasswordComponent,
    UserChangePasswordComponent,
    AdminPayfixComponent,
    UserPayfixComponent,
    AdminManageUsersComponent,
    AdminLogsComponent
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
