import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },  { path: 'precadastro', loadChildren: './precadastro/precadastro.module#PrecadastroPageModule' },
  { path: 'reagente', loadChildren: './reagente/reagente.module#ReagentePageModule' },
  { path: 'recurso', loadChildren: './recurso/recurso.module#RecursoPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
