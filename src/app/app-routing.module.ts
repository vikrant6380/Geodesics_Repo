import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCompComponent } from './table-comp/table-comp.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {
    path:'',redirectTo:'table',pathMatch:'full'
  }
  ,
{
  path:'test1' ,component:TestOneComponent
},
{
  path:'test2',component:TestTwoComponent
},
{
  path:'table',component:TableCompComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
