import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page";
import {AddProductComponent} from "./pages/add-product/add-product";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'add-product', component: AddProductComponent}
];
