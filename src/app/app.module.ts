import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LogsComponent } from './logs/logs.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { PayfixComponent } from './payfix/payfix.component';
import { SigninComponent } from './signin/signin.component';
import { ConfigService } from './config.service';
import { SearchClientComponent } from './dashboard/search-client/search-client.component';
import { ClientListComponent } from './dashboard/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    PayfixComponent,
    DashboardComponent,
    ChangePasswordComponent,
    LogsComponent,
    ManageUsersComponent,
    SearchClientComponent,
    ClientListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
