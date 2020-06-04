import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import("./home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import("./auth/auth.module").then(mod => mod.AuthModule)
  },
  {
    path: 'media',
    loadChildren: () =>
      import("./media/media.module").then(mod => mod.MediaModule)
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
