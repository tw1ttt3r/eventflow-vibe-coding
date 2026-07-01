import { Routes } from '@angular/router';
import { HomePageComponent } from '@app/pages/home/home-page.component';

export const routes: Routes = [{ path: '', component: HomePageComponent }, { path: '**', redirectTo: '' }];
