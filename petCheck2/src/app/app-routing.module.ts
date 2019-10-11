import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'agree', loadChildren: './agree/agree.module#AgreePageModule' },
  { path: 'mypage', loadChildren: './mypage/mypage.module#MypagePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'medical-chart', loadChildren: './medical-chart/medical-chart.module#MedicalChartPageModule' },
  { path: 'movemin/:d/:p', loadChildren: './movemin/movemin.module#MoveminPageModule' },
  { path: 'movemax/:d/:p', loadChildren: './movemax/movemax.module#MovemaxPageModule' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsurancePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
