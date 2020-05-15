import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ProductComponent } from 'src/app/products/product.component';
import { ConvertToSpacePipe } from 'src/app/products/convert-to-spaces.pipe';
import { ProductFilterPipe } from 'src/app/products/product-filter.pipe';
import { StarComponent } from 'src/app/shared/star.component';
import { ProductService } from 'src/app/products/product.service';
import { Welcome } from 'src/app/home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductGuardService } from 'src/app/products/product-guard.service';
import { RegisterComponent } from './shared/register.component';
import { FormPoster } from 'src/app/shared/form-poster.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertToSpacePipe,
    ProductFilterPipe,
    StarComponent,
    Welcome,
    ProductDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component:ProductComponent},
      {path:'products/:id',
        canActivate:[ProductGuardService],
        component:ProductDetailComponent},
      {path:'register', component:RegisterComponent},
      {path:'welcome', component:Welcome},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome', pathMatch:'full' }

      
    ])
  ],
  providers: [
    ProductService,
    ProductGuardService,
    FormPoster
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
