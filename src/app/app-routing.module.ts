import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'elso', component: ElsoOraComponent },
  // szeretném, ha az alkalmazás betöltésekor egyből átirányítani az elso route-ra, ez lenne a default route
  { path: '', redirectTo: 'elso', pathMatch: 'full' },
  // az Angular a route-ok párosítását a routes tömbön sorban végigiterálva próbálja elvégezni, az első egyezést fogja felhasználni. A wildcard (**) minden létező stringre egyezést mutat, tehát ha nem a tömb végére kerül, akkor kitakarja az őt követő route definíciókat!
  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
