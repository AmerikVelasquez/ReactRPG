import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
//import './rpg.js';
// import warrior from './rpg.js';
// import archer from './rpg.js';
// import commander from './rpg.js';
// import scientist from './rpg.js';
// import assassin from './rpg.js';
// import charName from './rpg.js';
import {warrior, archer, commander, scientist, assassin, charName} from './rpg.js';
//import storeState from './rpg.js';

$(document).ready(function(){
  $("#submit").submit(function(event){
    event.preventDefault();
    const inputtedCharName = $("input#characterName").val(); // getting character name from a user
    const role = $("#roles").val(); // getting selected role from a user
    if (role ==="Warrior") {
      return warrior;
    } else if (role === "Archer") {
      return archer;
    } else if (role === "Commander") {
      return commander;
    } else if (role === "Scientist") {
      return scientist;
    } else if (role === "Assassin") {
      return assassin;
    }
    let newCharName = charName(inputtedCharName); // assign the name to the new character
    let newChar = newCharName.storeState(role); // new character with role initial stats

    //const warrior = storeState(worriorInitialValues);
    //let newChar = storeState(role); // new character with role initial stats
    //let charName = newChar.inputtedCharName;
    // newChar = changeState("name")(inputtedCharName);
    $("#stats").append(`${newChar}`); // show role stats
  });
});

    