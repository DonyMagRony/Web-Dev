let str = "Hello";
str.test = 5;
alert(str.test);

//Numbers
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );

alert( 6.35.toFixed(20) );
alert( 1.35.toFixed(20) );
alert( (6.35 * 10).toFixed(20) );
alert( Math.round(6.35 * 10) / 10 );

function readNumber() {
    let num;  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
alert(`Read: ${readNumber()}`);

  let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}


function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );


  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );
/// Strings



function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("CC") ); 

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
  }

function extractCurrencyValue(str) {
    return +str.slice(1);
  }