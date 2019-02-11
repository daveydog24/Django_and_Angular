import { Component, OnInit } from '@angular/core';
import { GithubBattleService } from '../../services/github-battle.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
    players: object;

    constructor(private _githubService: GithubBattleService) { }

    // loads the current players set up in our database on init
    ngOnInit() {
        this._githubService.players.subscribe(
            (players) => { 
                this.players = players; 
            }
        );
    }
}