// Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DjangoHeroesComponent } from './django-heroes/django-heroes.component';
import { SigninComponent } from './signin/signin.component';
import { SuccessComponent } from './success/success.component';

// Services

import { TaskService } from './task.service';
import { DjangoHeroesService } from './django-heroes.service';
import { SignInService } from './sign-in.service';


@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        WelcomeComponent,
        DjangoHeroesComponent,
        SigninComponent,
        SuccessComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            // ######################   ROUTE GUARDS WILL EVENTUALLY BE ADDED FOR THE COMPONENTS ########################
            { path: 'home', component: WelcomeComponent },
            { path: 'tasks', component: TaskListComponent },
            { path: 'django', component: DjangoHeroesComponent },
            { path: 'signin', component: SigninComponent },
            { path: 'success', component: SuccessComponent },
            // NO ROUTE DIRECTES TO SIGN IN PAGE
            { path: '', redirectTo: 'signin', pathMatch: 'full' },
            // ALL OTHER ROUTES NOT MATCHING OTHER PATHS WILL REROUTE TO SIGN IN
            { path: '**', redirectTo: 'signin', pathMatch: 'full' }
        
        ])
    ],
    providers: [
        TaskService,
        DjangoHeroesService,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}