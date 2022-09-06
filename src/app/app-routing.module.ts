import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BzServicesComponent } from './pages/bz-services/bz-services.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Bitionz - Dedicated software solutions',
      },
      {
        path: 'services/:service',
        component: BzServicesComponent,
        title: 'Bitionz - Services',
      },
      {
        path: 'news/:id',
        component: NewsComponent,
        title: 'Bitionz - News',
      },
      {
        path: 'services',
        redirectTo: 'services/development',
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
