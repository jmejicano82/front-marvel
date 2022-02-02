import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';
import { Location } from '@angular/common';
import { ModalPollComponent } from '../ui/modal-poll/modal-poll.component';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {

  private id;
  public heroe: Heroe;
  public question_modal: string;
  public team:string = "";
  @ViewChild('modal') modal: ModalPollComponent;
  public heroeSubs: Subscription; 


  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService, 
    private _location: Location,
    private store: Store<{ heroe: Heroe }>
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.heroeSubs = this.store
        .select('heroe')
        .subscribe((stateHero) => {
          if(stateHero){
            this.heroe = stateHero.heroe;
          }
      });
      this.heroesService.getHeroe(params.id);
    });
    
  }

  goBack() {
    this._location.back();
  }

  launchModal():void{
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

  getTeam(team):void{
    this.team = team;
    this.heroesService.setHeroeTeam(this.heroe.id, this.team);
  }

}
