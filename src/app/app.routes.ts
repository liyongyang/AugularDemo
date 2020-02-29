import { RouterModule } from "@angular/router";

export const appRoutes = [
  {
    path: "",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule"
  }
];
