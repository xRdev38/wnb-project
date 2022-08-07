import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/volunteers',
    pathMatch: 'full',
  },
  {
    path: 'volunteers',
    loadChildren: () =>
      import('./features/volunteers/volunteers.module').then(
        module => module.VolunteersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
