import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubBattleService } from '../../../services/github-battle.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
    winner: object = {}
    loser: object = {}
    
    constructor(private router: Router, private _githubService: GithubBattleService) { }
    
    // gets the current winner and loser from http service updated from battle.component 
    ngOnInit() {
        this._githubService.winner.subscribe(
            (winner) => { this.winner = winner; }
        );
        this._githubService.loser.subscribe(
            (loser) => { this.loser = loser; }
        );
    }

    // when the reset button is clicked it reroutes us home
    reset(){
        this.router.navigate(['/github/battle'])
    }
}