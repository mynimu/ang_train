import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BmiDetailComponent } from './bmi-detail/bmi-detail.component';
import { CalculatorService } from './calculator/CalculatorService';
import { CounterComponent } from './counter/counter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmpPipe } from './emps/emp.pipe';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { LoveCalculatorService, FigoService } from './formvalidation/services.service';
import { RouteComponent } from './route/route.component';
import { Route2Component } from './route2/route2.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiDetailComponent,
    CounterComponent,
    CalculatorComponent,
    EmpPipe,
    FormvalidationComponent,
    RouteComponent,
    Route2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'view1', component: RouteComponent},
      {path: 'view2', component: Route2Component},
      {path: 'view2/:id', component: Route2Component},  //canDeactivate
      {path: '**', redirectTo: 'view1', pathMatch: 'full'}    
    ])
  ],
  providers: [CalculatorService, LoveCalculatorService, FigoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
