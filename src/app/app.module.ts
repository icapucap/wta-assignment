import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpComponent } from './book/book.component';
import { EmpDetailComponent } from './book-detail/book-detail.component';
import { EmpCreateComponent } from './book-create/book-create.component';
import { EmpEditComponent } from './book-edit/book-edit.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: EmpComponent,
    data: { title: 'Employee List' }
  },
  {
    path: 'book-details/:id',
    component: EmpDetailComponent,
    data: { title: 'Employee Details' }
  },
  {
    path: 'book-create',
    component: EmpCreateComponent,
    data: { title: 'Create Appraisal' }
  },
  {
    path: 'book-edit/:id',
    component: EmpEditComponent,
    data: { title: 'Edit Appraisal' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    EmpDetailComponent,
    EmpCreateComponent,
    EmpEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
