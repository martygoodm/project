"use strict";

let yourName;

function showname() {
    yourName = prompt('Введите свое имя', '');
    while(yourName == '' || yourName == null || isNaN(yourName)) {
        yourName = prompt('Введите свое имя', '');
    }
}

showname(yourName);