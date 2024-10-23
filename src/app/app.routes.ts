import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { MediaComponent } from './components/media/media.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        pathMatch:'full'
    },
    {
        path: 'home',
        component: MainPageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'media',
        component: MediaComponent
    },
    {
        path: 'contact',
        component: ContactUsComponent
    },
];
