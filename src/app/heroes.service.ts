import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from './classes/heroe';
import { Store } from '@ngrx/store';
import * as actionHeroes from './hero-list/hero-list.actions';
import * as actionHeroe from './hero-profile/hero-profile.actions';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  private protocol = 'http:';
  private ApiUrl = '//localhost:3200/bff/v1/Api-Marvel-BFF/';
  private Module = 'heroe/'
  public heroes: Array<Heroe>;
  public heroe: Heroe;

  public page = 0;
  public step = 20;
  public total = 0;
  public teams = new Map();

  resetPager() {
      this.page = 0;
  }

  constructor(
    private http: HttpClient, 
    private store: Store
    ) { }

  getHeroes (nameStartsWith?: string, page?: number)  {
    if (page || page === 0) {
      this.page = page;
    }
    const method = "getAll/"
    const url = this.protocol + this.ApiUrl + this.Module + method
                 + (this.page * this.step) + "/" 
                + (nameStartsWith ? nameStartsWith : '');
    this.http.get<any>(url).subscribe((data) => {
        this.heroes = [];
        this.total = Math.ceil(data.data.total / this.step);
      data.data.results.forEach( result => {
          this.heroes.push(new Heroe(
            result.id,
            result.name,
            result.description,
            result.modified,
            result.thumbnail,
            result.resourceURI,
            this.getTeamColor(result.id)
          ));
      });
      this.store.dispatch(actionHeroes.loadHeroes({heroes: this.heroes, page: this.page, total: this.total}));
    });
  }

  getHeroe(id) {
    const method = "getOne/"
    const url = this.protocol + this.ApiUrl + this.Module + method + id;
    this.http.get<any>(url).subscribe((data) => {
      let temp = data.data.results[0];
      this.heroe = new Heroe(temp.id, temp.name, temp.description, temp. modified, temp.thumbnail, temp.resourceURI,this.getTeamColor(temp.id));
      this.store.dispatch(actionHeroe.loadHeroe({heroe: this.heroe}));
    });
  }

  setHeroeTeam(id: string, team: string) {
    const method = "team"
    const url = this.protocol + this.ApiUrl + this.Module + method + id;
    let data = this.http.post<any>(url, { id: id, team: team });
    //console.log(data);
    return data;
  }

  public group_colors = {"azul" : "#1f8ff7",
            "violeta":"#a43de3",
            "naranjo":"#df5c0f",
            "verde":"#0ea521"}

  getTeamColor(id):string{
    if(this.teams.get(id)!=undefined){
      return this.teams.get(id);
    }
    else{
    return "";
    }
  }

}
