// Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DjangoHeroesComponent } from './components/django-heroes/django-heroes.component';
import { SigninComponent } from './components/signin/signin.component';
import { SuccessComponent } from './components/success/success.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BurbankComponent } from './components/weather/burbank/burbank.component';
import { ChicagoComponent } from './components/weather/chicago/chicago.component';
import { DallasComponent } from './components/weather/dallas/dallas.component';
import { OaklandComponent } from './components/weather/oakland/oakland.component';
import { SeattleComponent } from './components/weather/seattle/seattle.component';
import { WashingtonDCComponent } from './components/weather/washington-dc/washington-dc.component';
import { GithubBattleComponent } from './components/github-battle/github-battle.component';
import { BattleComponent } from './components/github-battle/battle/battle.component';
import { RankingsComponent } from './components/github-battle/rankings/rankings.component';
import { ResultsComponent } from './components/github-battle/results/results.component';

// Services

import { TaskService } from './services/task.service';
import { DjangoHeroesService } from './services/django-heroes.service';
import { SignInService } from './services/sign-in.service';
import { CityWeatherService } from './services/city-weather.service';

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
        WashingtonDCComponent,
        GithubBattleComponent,
        BattleComponent,
        RankingsComponent,
        ResultsComponent
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
            {   
                path: 'github',
                component: GithubBattleComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'prefix', 
                        redirectTo: 'battle',
                    },
                    {
                        path: 'battle',
                        component: BattleComponent,
                    },
                    {
                        path: 'rankings',
                        component: RankingsComponent,
                    },
                    {
                        path: 'results',
                        component: ResultsComponent,
                    },
                ]
            },
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