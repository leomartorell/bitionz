import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BzServicesComponent } from './pages/bz-services/bz-services.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

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
        path: 'about-us',
        component: AboutUsComponent,
        title: 'Bitionz - About us',
      },
      {
        path: 'news/:url',
        component: NewsComponent,
        title: 'Bitionz - News',
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Bitionz - Contact',
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
