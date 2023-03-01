import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* components */
import { PageAComponent } from './pages/page1/page-A.component';
import { PageBComponent } from './pages/page2/page-B.component';
import { PageCComponent } from './pages/page3/page-C.component';

const routes: Routes = [
    { path: 'page-a', component: PageAComponent },
    { path: 'page-b', component: PageBComponent },
    { path: 'page-c', component: PageCComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
