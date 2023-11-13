import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

  pokemones=[[1,"Bulbasaur","assets/001.png","Semilla", "0,7 m", "6,90 kg", "Espesura",["Planta","Veneno"],["Fuego","Psíquico","Volador","Hielo"]],
  [2,"Ivysaur","assets/002.png","Semilla", "1,0 m", "13,00 kg", "Espesura",["Planta","Veneno"],["Fuego","Psíquico","Volador","Hielo"]],
  [3,"Venusaur","assets/003.png","Semilla", "2,0 m", "100,00 kg", "Espesura",["Planta","Veneno"],["Fuego","Psíquico","Volador","Hielo"]],
  [4,"Charmander","assets/004.png","Lagartija","0,6 m","8,50 kg","Mar llamas",["Fuego"],["Agua","Tiera","Roca"]],
  [5,"Charmeleon","assets/005.png","Llama","1,1 m","19,00 kg","Mar llamas",["Fuego"],["Agua","Tiera","Roca"]],
  [6,"Charizard","assets/006.png","Llama","1,7 m","90,50 kg","Mar llamas",["Fuego","Volador"],["Agua","Tiera","Roca"]]];
  tiposPoke=[["Planta","Veneno"],["Planta","Veneno"],["Planta","Veneno"],["Fuego"],["Fuego"],["Fuego","Volador"]]
  debilidades=[["Fuego","Psíquico","Volador","Hielo"],["Fuego","Psíquico","Volador","Hielo"],["Fuego","Psíquico","Volador","Hielo",],["Agua","Tiera","Roca"],["Agua","Tiera","Roca"],["Agua","Tiera","Roca"]]
}
