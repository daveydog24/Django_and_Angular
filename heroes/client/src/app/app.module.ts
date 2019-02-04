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

// Services

import { TaskService } from './task.service';
import { HeroesService } from './heroes.service';
import { DjangoHeroesService } from './django-heroes.service';
import { SigninComponent } from './signin/signin.component';


@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        HeroListComponent,
        WelcomeComponent,
        DjangoHeroesComponent,
        SigninComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'tasks', component: TaskListComponent },
            { path: 'signin', component: SigninComponent },
            { path: 'heroes', component: HeroListComponent },
            { path: 'django', component: DjangoHeroesComponent },
            { path: 'home', component: WelcomeComponent },
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