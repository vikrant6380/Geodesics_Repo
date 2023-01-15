import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConfigScreenComponent } from './config-screen/config-screen.component';
import { GeodesicsSurveyComponent } from './geodesics-survey/geodesics-survey.component';
import { GeodesicsComponent } from './geodesics/geodesics.component';
import { GraphAnalysisComponent } from './graph-analysis/graph-analysis.component';
import { IndividualsInfluentialityComponent } from './individuals-influentiality/individuals-influentiality.component';
import { InfluentialGraphComponent } from './influential-graph/influential-graph.component';
import { TableCompComponent } from './table-comp/table-comp.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {
    path:'',redirectTo:'geodesics',pathMatch:'full'
  }
  ,
// {
//   path:'test1' ,component:TestOneComponent
// },
// {
//   path:'test2',component:TestTwoComponent
// },
// {
//   path:'table',component:TableCompComponent
// },
{
  path:'geodesicsSurvey',component:GeodesicsSurveyComponent
},
{
  path:'geodesics',component:GeodesicsComponent
},
{
  path:'admin',component:AdminComponent
},
{
  path:'detailedSurvey',component:GraphAnalysisComponent
},
{
  path:'influentialGraph',component:InfluentialGraphComponent
},
{
  path:'individalAnalysis',component:IndividualsInfluentialityComponent
},
{
  path:'adminConfig',component:ConfigScreenComponent
  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
