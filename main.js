// tady je místo pro náš program

document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */


/**
 * Upozorní uživatele při spuštění.
 */

function secti(a, b) {
  let c = a + b;
  //return c;
  document.getElementById('vysledek').innerHTML = c;
}

/*
function handleResult() {
  function secti(a, b) {
    let c = a + b;
    //return c;
  }
  let vysledek = document.querySelector('#vysledek');
  //vysledek = secti(12,23);
  vysledek.textContent = 'ahoj'
  }
*/

function handleClick () {
  let ctverecek = document.getElementById('ctverecek');
  ctverecek.style.backgroundColor = 'lightgreen';
}

function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  let ctverecek = document.getElementById('ctverecek');
  ctverecek.textContent= 'novyCtverecek'
}



