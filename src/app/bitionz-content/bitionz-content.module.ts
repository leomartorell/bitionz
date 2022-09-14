import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BzServicesComponent } from './pages/bz-services/bz-services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    children: [
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
    ],
  },
];

@NgModule({
  declarations: [
    BzServicesComponent,
    AboutUsComponent,
    NewsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [RouterModule],
})
export class BitionzContentModule {}
