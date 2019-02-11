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
import { WeatherComponent } from './weather/weather.component';
import { BurbankComponent } from './weather/burbank/burbank.component';
import { ChicagoComponent } from './weather/chicago/chicago.component';
import { DallasComponent } from './weather/dallas/dallas.component';
import { OaklandComponent } from './weather/oakland/oakland.component';
import { SeattleComponent } from './weather/seattle/seattle.component';
import { WashingtonDCComponent } from './weather/washington-dc/washington-dc.component';

// Services

import { TaskService } from './task.service';
import { DjangoHeroesService } from './django-heroes.service';
import { SignInService } from './sign-in.service';
import { CityWeatherService } from './city-weather.service';


@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        WelcomeComponent,
        DjangoHeroesComponent,
        SigninComponent,
        SuccessComponent,
        WeatherComponent,
        BurbankComponent,
        ChicagoComponent,
        DallasComponent,
        OaklandComponent,
        SeattleComponent,
        WashingtonDCComponent
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
            { path: 'weather', component: WeatherComponent },
            // NO ROUTE DIRECTES TO SIGN IN PAGE
            { path: '', redirectTo: 'signin', pathMatch: 'full' },
            // ALL OTHER ROUTES NOT MATCHING OTHER PATHS WILL REROUTE TO SIGN IN
            { path: '**', redirectTo: 'signin', pathMatch: 'full' }        
        ])
    ],
    providers: [
        TaskService,
        DjangoHeroesService,
        CityWeatherService,
        SignInService,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}