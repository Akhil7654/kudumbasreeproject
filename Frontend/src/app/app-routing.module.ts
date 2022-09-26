import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddloanComponent } from './addloan/addloan.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { LoanComponent } from './loan/loan.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { ManageloanComponent } from './manageloan/manageloan.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'',component:MainhomeComponent},
  {path:'reg',component:UserloginComponent},
  {path:'account',component:AccountComponent},
  {path:'loginad',component:LoginadminComponent},
  {path:'add',component:AddmemberComponent},
  {path:'side',component:SidebarComponent},
  {path:'loanad',component:LoanComponent},
  {path:'manloan',component:ManageloanComponent}
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
