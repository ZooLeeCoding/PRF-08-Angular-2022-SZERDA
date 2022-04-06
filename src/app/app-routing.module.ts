import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';

const routes: Routes = [
  { path: 'elso', component: ElsoOraComponent },
  // szeretném, ha az alkalmazás betöltésekor egyből átirányítani az elso route-ra, ez lenne a default route
  { path: '', redirectTo: 'elso', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
