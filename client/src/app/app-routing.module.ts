import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {NotFoundComponent} from './components/not-found/not-found.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: HomeComponent},
  {path: 'login', component: HomeComponent},
  {path: 'catalog', component: HomeComponent},
  {path: 'add-product', component: HomeComponent},
  {path: 'items/details/:id', component: HomeComponent},
  {path: 'items/edit/:id', component: HomeComponent},
  {path: 'my-orders', component: HomeComponent},
  {path: 'orders/manage', component: HomeComponent},
  {path: 'orders/edit/:id', component: HomeComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}