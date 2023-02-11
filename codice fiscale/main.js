function cod(){
   myfun();cognome();nome();anno();mese();giorni();comune();cont();
   let controllo = "";
   controllo = annul + month + dat;// + day + comun;
   document.getElementById("codice").innerHTML = controllo;
   document.getElementById("contr").innerHTML = contr;
}


function myfun(){
   let verificaNome = document.getElementById("nome").value;
   let verificaCogome = document.getElementById("cognome").value;
   let verificaAnno = document.getElementById("anno").value;
   let verificaMese = document.getElementById("mese").value;
   let verificaGiorno = document.getElementById("giorno").value;
   let verificaComune = document.getElementById("comune").value;
   if (verificaNome == "" || verificaCogome == "" || verificaAnno == "" || verificaMese == "" || verificaGiorno == "" || verificaComune == ""){
      alert("NON lasciare spazi vuoti");
   }
}

   ////calcolo nome
   function nome(){
      let vocali = [];
      let cons = [];
      let j = 0;
      let x = document.getElementById('nome').value;
      let array = x.split("");
      let nume = "";

      for(let i = 0; i < array.length; i++){
         if(
            array[i] == "A" || array[i] == "U" || array[i] == "E" || array[i] == "I" || array[i] == "O" || array[i] == "a" || array[i] == "u" || array[i] == "e" || array[i] == "i" || array[i] == "o")
         {
            vocali[j]=array[i];
            j++;
            array.splice(i, 1);
            i--;
         }

     }


      if(x.length == 2){
         nume = x +"X";
      }


      else if(x.length == 1){
         nume = x + "XX";
      }

      if(x.length >=3 ){
        if(array.length >= 4){
        nume = array[0] + array[2] + array[3];
      }


      else if(array.length == 3){
         nume = array[0] + array[1] + array[2];
      }


       else if(array.length == 2){
         nume = array[0] + array[1] + vocali[0];
      }


       else if(array.length == 1){
         nume = array[0] + vocali[0] + vocali[1];
      }
      }
      document.getElementById("nume").innerHTML = nume.toUpperCase();
  }


   ////////////////
function cognome() {
   let vocali = [];
      let cons = [];
      let j = 0;
      let x = document.getElementById('cognome').value;
      let array = x.split("");
      let cognome = "";




      for(let i = 0; i < array.length; i++){
         if(
            array[i] == "A" || array[i] == "U" || array[i] == "E" || array[i] == "I" || array[i] == "O" || array[i] == "a" || array[i] == "u" || array[i] == "e" || array[i] == "i" || array[i] == "o")
         {
            vocali[j]=array[i];
            j++;
            array.splice(i, 1);
            i--;
         }
     }


      if(x.length == 2){
         cognome = x +"X";
      }


      else if(x.length == 1){
         cognome = x + "XX";
      }

      if(x.length >=3 ){
        if(array.length >= 4){
        cognome = array[0] + array[1] + array[2];
      }


      else if(array.length == 3){
         cognome = array[0] + array[1] + array[2];
      }


       else if(array.length == 2){
         cognome = array[0] + array[1] + vocali[0];
      }


       else if(array.length == 1){
         cognome = array[0] + vocali[0] + vocali[1];
      }
      }
      document.getElementById("surname").innerHTML = cognome.toUpperCase();

}

//////////////
function anno(){
   let year = document.getElementById("anno").value;
   annul = year.charAt(2) + year.charAt(3);
}
///////////////
function mese() {
   let mese = document.getElementById("mese").value;
//   switch(month) {
//      case "01":
//      month="A";
//      break;
//
//         case "02":
//      month="B";
//      break;
//         case "03":
//      month="C";
//      break;
//         case "04":
//      month="D";
//      break;
//         case "05":
//      month="E";
//      break;
//         case "06":
//      month="F";
//      break;
//         case "07":
//      month="G";
//      break;
//         case "08":
//      month="H";
//      break;
//         case "09":
//      month="I";
//      break;
//         case "10":
//      month="L";
//      break;
//         case "11":
//      month="M";
//      break;
//         case "12":
//      month="N";
//      break;
//      default:
//         month
//         ;
   if (mese == 1) {
        month = "A";
    }
    else if (mese == 2) {
        month = "B";
    }
    else if (mese == 3) {
        month = "C";
    }
    else if (mese == 4) {
        month = "D";
    }
    else if (mese == 5) {
        month = "E";
    }
    else if (mese == 6) {
        month = "H";
    }
    else if (mese == 7) {
        month = "L";
    }
    else if (mese == 8) {
        month = "M";
    }
    else if (mese == 9) {
        month = "P";
    }
    else if (mese == 10) {
        month = "R";
    }
    else if (mese == 11) {
        month = "S";
    }
    else {
        month = "T";
    }
   }
//////////////////
function giorni(){
    let giorno = document.getElementById('giorno').value;
    let femmina = document.getElementById("fem");
    document.getElementById("giorno").value = giorno;
    if (femmina.checked = true) {
        dat = parseInt(giorno) + 40;

    }
    else {
            dat = giorno;
        }
    }

/////////////////
function comune(){
   let comun;
   comun = document.getElementById("comune").value;
   document.getElementById("place").innerHTML = comun.toUpperCase();
}

function cont() {
    let pari = 0;
    let dispari = 0;
    let somma = 0;
    let count = 0;
    let controllo;
    controllo = annul + month + dat;
    let resto = 0;
    for (let i = 1;i <controllo.length + 1;i++) {
        if (i % 2 == 0) {
            if (controllo.charCodeAt(i-1) >= 48 && controllo.charCodeAt(i-1) <= 57) {
                pari = pari + (controllo.charCodeAt(i-1) - 48);

            }
            else {
                pari = pari + (controllo.charCodeAt(i-1) - 65);
            }
         }
            else {

            if (controllo.charCodeAt(i-1) == 65 || controllo.charCodeAt(i-1) == 48) {
                dispari = dispari + 1;
            }
            else if (controllo.charCodeAt(i-1) == 66 || controllo.charCodeAt(i-1) == 49) {
                dispari = dispari;
            }
            else if (controllo.charCodeAt(i-1) == 67 || controllo.charCodeAt(i-1) == 50) {
               dispari = dispari + 5;
            }

           else if (controllo.charCodeAt(i-1) == 68 || controllo.charCodeAt(i-1) == 51) {
                dispari = dispari + 7;
            }
            else if (controllo.charCodeAt(i-1) == 69 || controllo.charCodeAt(i-1) == 52) {
               dispari = dispari + 9;
            }

           else if (controllo.charCodeAt(i-1) == 70 || controllo.charCodeAt(i-1) == 53) {
                dispari = dispari + 13;
            }
            else if (controllo.charCodeAt(i-1) == 71 || controllo.charCodeAt(i-1) == 54) {
               dispari = dispari + 15;
            }

           else if (controllo.charCodeAt(i-1) == 72 || controllo.charCodeAt(i-1) == 55) {
                dispari = dispari + 17;
            }
            else if (controllo.charCodeAt(i-1) == 73 || controllo.charCodeAt(i-1) == 56) {
               dispari = dispari + 19;
            }
           else if (controllo.charCodeAt(i-1) == 74 || controllo.charCodeAt(i-1) == 57) {
                dispari = dispari + 21;
            }
            else if (controllo.charCodeAt(i-1) == 75) {
               dispari = dispari + 2;
            }

           else if (controllo.charCodeAt(i-1) == 76) {
                dispari = dispari + 4;
            }
            else if (controllo.charCodeAt(i-1) == 77) {
               dispari = dispari + 18;
            }

           else if (controllo.charCodeAt(i-1) == 78) {
                dispari = dispari + 19;
            }
            else if (controllo.charCodeAt(i-1) == 79) {
               dispari = dispari + 11;
            }

           else if (controllo.charCodeAt(i-1) == 80) {
                dispari = dispari + 3;
            }
            else if (controllo.charCodeAt(i-1) == 81) {
               dispari = dispari + 6;
            }

           else if (controllo.charCodeAt(i-1) == 82) {
                dispari = dispari + 8;
            }
            else if (controllo.charCodeAt(i-1) == 83) {
               dispari = dispari + 12;
            }
           else if (controllo.charCodeAt(i-1) == 84) {
                dispari = dispari + 14;
            }
            else if (controllo.charCodeAt(i-1) == 85) {
               dispari = dispari + 16;
            }

           else if (controllo.charCodeAt(i-1) == 86) {
                dispari = dispari + 10;
            }
            else if (controllo.charCodeAt(i-1) == 87) {
               dispari = dispari + 22;
            }

           else if (controllo.charCodeAt(i-1) == 88) {
                dispari = dispari + 25;
            }
            else if (controllo.charCodeAt(i-1) == 89) {
               dispari = dispari + 24;
            }

            else {
                dispari = dispari + 23;
            }
         }
      }
      count = pari + dispari;
      resto = count % 26;
      contr = String.fromCharCode(resto + 65);
   }

