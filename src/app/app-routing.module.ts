import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    component: ErrorComponent,
    data: {
      status: 404,
      title: 'Oops! Page not found',
      message: 'The page you were looking for doesn\'t exist. You may have mistyped the address or the page may have moved.'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
