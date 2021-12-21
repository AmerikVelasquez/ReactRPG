import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function(event){
  event.preventDefault();
  $("#submit").submit(function(){
    const inputtedCharName = $("input#characterName").val(); // getting character name from a user
    const role = $("#roles").val(); // getting selected role from a user
    let newChar = storeState(role); // new character with role initial stats
    //let charName = newChar.inputtedCharName;
    newChar = changeState("name")(inputtedCharName);
    $("#stats").append(`${newChar}`) // show role stats
  })
});