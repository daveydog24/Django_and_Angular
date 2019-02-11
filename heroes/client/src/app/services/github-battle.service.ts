import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../github-battle/player';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubBattleService {
    winner: BehaviorSubject<Object> = new BehaviorSubject({});
    loser: BehaviorSubject<Object> = new BehaviorSubject({});
    players: BehaviorSubject <any[]> = new BehaviorSubject([]);

    // gets the players to start initially
    constructor(private http: HttpClient) { 
        this.getPlayers();
    }

    // gets all players that are in the database or have "played before"
    getPlayers(){
        this.http.get('github/players/all', {responseType: "json"}).subscribe((players: any[]) => {
            this.players.next(players);
        });
    }
    
    // retrieves the gitHub info of given user and returns it
    getGithubInfo(username){  
        // console.log(username)
        return this.http.get(`https://api.github.com/users/${username}`)
    }

    // adds user but only if the user doesnt exist and that is checked in the battle.component.ts file
    addUser(newPlayer: any){
        // console.log(newPlayer);
        this.http.post('github/player/add', newPlayer, {responseType: "json"}).toPromise()
        .then(response => {
            console.log(response, "added user")
        })
        .catch(error => {
            console.log(error, "error adding user")
        })
        // update players
        this.getPlayers();
    }

    // updates the battle stats for the results component to retrieve
    battleStats(winner, loser){
        this.winner.next(winner);
        this.loser.next(loser);
    }
}