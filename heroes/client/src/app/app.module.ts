// Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeroListComponent } from './hero-list/hero-list.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { DjangoHeroesComponent } from './django-heroes/django-heroes.component';
import { SigninComponent } from './signin/signin.component';
import { SuccessComponent } from './success/success.component';

// Services

import { TaskService } from './task.service';
import { HeroesService } from './heroes.service';
import { DjangoHeroesService } from './django-heroes.service';
import { SignInService } from './sign-in.service';


@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        HeroListComponent,
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
            { path: 'home', component: WelcomeComponent },
            { path: 'tasks', component: TaskListComponent },
            { path: 'django', component: DjangoHeroesComponent },
            { path: 'heroes', component: HeroListComponent },
            { path: 'signin', component: SigninComponent },
            { path: 'success', component: SuccessComponent },
            // no route redirects to home
            { path: '', redirectTo: 'signin', pathMatch: 'full' },
            // all other routes not matched will redirect to home
            { path: '**', redirectTo: 'signin', pathMatch: 'full' }
        ])
    ],
    providers: [
        TaskService,
        HeroesService,
        DjangoHeroesService,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}