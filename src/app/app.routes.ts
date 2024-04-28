import { Routes } from '@angular/router';

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { MyspaceComponent } from './myspace/myspace.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {path:"", title:"Accueil", component:HomeComponent},
    {path:"auth", title:"Authentification", component:AuthenticationComponent},
    {path:"create", title:"Créer un compte", component:CreateaccountComponent},
    {path:"myspace", title:"Mon espace", component:MyspaceComponent},
    {path:"todo", title:"Mes lectures", component:TodoComponent},
];
