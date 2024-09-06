import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { AccountComponent } from './account/account.component';
import { HouseKeepingComponent } from './house-keeping/house-keeping.component';
import { StoreComponent } from './store/store.component';
import path from 'node:path';
export const routes: Routes = [
    {path: 'Admin', component: AdminComponent},
    {path: 'FrontOffice', component: FrontOfficeComponent},
    {path: 'Accounting', component: AccountComponent},
    {path: 'HouseKeeping', component: HouseKeepingComponent},
    {path: 'Store', component: StoreComponent},
 
];
