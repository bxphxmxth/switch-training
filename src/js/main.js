// Jours
// let jour = prompt("On est quel jour");

// switch(jour) {
//     case "lundi":
//         alert("J'ai cours le lundi");
//         break;
//   case "mardi":
//         alert("Toujours cours");
//         break;
//     case "mercredi":
//         alert("Always, on y est presk");
//         break;
//     case "jeudi":
//         alert("waaah c long");
//         break;
//     case "vendredi":
//         alert("Pq t'es excitée? Tu travailles demain :'(");
//         break;
//     case "samedi":
//         alert("go vendre des legumes bio");
//         break;
//     case "dimanche":
//         alert("Wallah, j'ai plus de vie");
//         break;
//     default:
//         alert("entre un vrai jour de la semaine et pas jeudreudi");
//         break;   
// }                             

// Quel temps? 

// let temps = prompt("quel temps fait-il?");

// switch(temps) {
//     case "pluie":
//         alert("prends ton paraplouiie");
//         break;
//     case "soleil":
//         alert("crème solaire afou");
//         break;
//     default:{
//         alert("kua?");
//     }        
// }


// Calculs

let nb1 = prompt("choisis un premier nombre");
let op = prompt("choisis un opérateur entre +,-,*,/");
let nb2 = prompt("choisis un deuxième nombre");

switch(op){
    case "+":
        alert(`${nb1} + ${nb2} = ${nb1+nb2}`);
        break;
    case "-":
        alert(`${nb1} - ${nb2} = ${nb1-nb2}`);
        break;
    case "*":
        alert(`${nb1} * ${nb2} = ${nb1*nb2}`);
        break;
    case "/":
        alert(`${nb1} / ${nb2} = ${nb1/nb2}`);
        break;
    default:
        alert("choisis un opérateur correct :(");
        break;    
    
        
}