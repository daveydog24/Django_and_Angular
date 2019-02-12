import { Component, OnInit } from '@angular/core';
import { GithubBattleService } from '../../../services/github-battle.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
    players = [];

    constructor(private _githubService: GithubBattleService) { }

    // loads the current players set up in our database on init
    ngOnInit() {
        this.players = this.updatePlayers()
    }
    removePlayer(player){
        let observable$ = this._githubService.removePlayer(player);
        observable$.subscribe(data => {
            console.log(data)
            this.players = [];
        });
        this.players = this.updatePlayers()
    }

    updatePlayers(){
        let newList = []
        this._githubService.players.subscribe(
            (data) => {                 
                let temp_players = data["players"];
                let players_score = [];

                for (let player of temp_players){
                    players_score.push(parseInt(player.score))
                }
                let sorted_scores = players_score.sort(function(a, b){return b-a});
                let index = 0
                let count = temp_players.length;
                while (count > 0) {
                    for(let player of temp_players){
                        if (player.score == sorted_scores[index]){
                            index++;
                            newList.push(player)
                        }
                    }
                    count--;
                }
            }
        );
        return newList;
    }
}