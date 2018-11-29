import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvasDrawComponent } from './canvas-draw/canvas-draw.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'bridget', loadChildren: './pages/bridget/bridget.module#BridgetPageModule' },
  {path: 'canvas-draw' , component: CanvasDrawComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
