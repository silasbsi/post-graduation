import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { HandlingJsonComponent } from './pages/handling-json/handling-json.component';
import { SubRouteComponent } from './pages/sub-route/sub-route.component';
import { Page1Component } from './pages/sub-route/page1/page1.component';
import { Page2Component } from './pages/sub-route/page2/page2.component';
import { PrivateComponent } from './pages/private/private.component';
import { AuthorizedGuard } from './guards/authorized.guard';
import { DetailsComponent } from './pages/details/details.component';
import { SimpleListComponent } from './pages/simple-list/simple-list.component';
import { EditComponent } from './pages/edit/edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'simple-list', component: SimpleListComponent },
  { path: 'details/:id/:phone', component: DetailsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'edit', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'json', component: HandlingJsonComponent },
  {
    path: 'subroute',
    component: SubRouteComponent,
    children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
    ],
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthorizedGuard],
  },
];
