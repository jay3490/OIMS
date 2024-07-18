import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { InwardComponent } from './inward/inward.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductComponent } from './product/product.component';
import { ReportComponent } from './report/report.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'changePassword', component: ChangePasswordComponent },
  {path: 'category', component: CategoryComponent },
  {path: 'product', component: ProductComponent },
  {path: 'employee', component: EmployeeComponent },
  {path: 'inward', component: InwardComponent },
  {path: 'report', component: ReportComponent },
  {path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
