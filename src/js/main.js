// // 1.
// let jour = prompt("Quel jour sommes-nous? ");
// switch (jour){
//     case "lundi":
//         alert("Lundi les canards vont à la mare");
//         break;
//     case "mardi":
//         alert("Mardi les canards vont à la mer");  
//         break;
//     case "mercredi":
//         alert("Mercredi les canards font un jeu");
//         break;      
//    case "jeudi":
//         alert("Jeudi les canards vont dans le vent");
//         break;
//     case "vendredi":
//         alert("Le vendredi j'ai plus d'inspi");
//         break;
//     case "samedi":
//     case "dimanche": 
//         alert("Ca y est c'est le Week-eeeend  <3 Lorie <3 ");
//         break;     
//     default:
//         alert("entre un vrai jour wesh");
//         break;           
// }        

//2 

// let temps = prompt("Quel temps fait-il?");
// switch(temps){
//     case "pluie":
//         alert("sors le parapluie");
//         break;
//     case "neige":
//         alert("bonhomme2Neige");
//         break;
//     case "soleil":
//         alert("Eeeeeew SOLEIL kss kss");
//         break; 
//     case "nuageux":
//         alert("Il fait nuageux, vive les cumulonimbus ");
//         break;
//     case "orageux":
//         alert("y'a d'l'orage");
//         break;    
//     default : 
//     ("check par la fen- ah ben non, je t'ai séquestré dans ma cave");
//     break;

// }

let nb1 = parseInt(prompt("Choisis un nombre"));
let op = prompt("Choisis un opérateur + - * / ");
let nb2 = parseInt("Choisis un autre nombre broo") 

switch(op){
    case "+":
        alert(`${nb1} + ${nb2} = ${nb1+nb2}`);
        break;
    case "-":
        alert(`${nb1} - ${nb2} = ${nb1-nb2}`);
        break;
    case "/":
        alert(`${nb1} / ${nb2} = ${nb1/nb2}`);  
        break; 
    case "*":
         alert(`${nb1} * ${nb2} = ${nb1*nb2}`);
         break;  
    default :
        alert("choisis un operateur correct nn????");
        break;        
}   
