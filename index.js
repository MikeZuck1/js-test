// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS((X)) starTerCode</h1>`;

// scope globale. 
const scopeGlobalVariable = 'Je suis déclaré à l\'exterieur.';

const exterieur = () => {
  return scopeGlobalVariable;   
}
console.log(exterieur());  
 
// scope locale.  
const interieur = () => {
  const scopeLocalVariable = 'Je suis déclaré à l\'intérieur.'
  return scopeLocalVariable; 
}
console.log(interieur());  
 
// fonction conditionnelle. 
function conditional () { 
  let galaxy = 'stars'  
  galaxy = '' 
  const nameUs = 'Mike'; 
  
  if (galaxy === 'sun') {
    return `Sorry ${nameUs}, you can't see the stars. It's only possible for the sun.`
  } else if (galaxy === 'moon') {
    return `Sorry ${nameUs}, you can't see the stars. It's only possible for the moon.`
  } else if (galaxy === 'stars') {
    return `Yes! ${nameUs}, you can see now the stars.`
  } else {
    return `Sorry ${nameUs}, there's nothing here.`
  }
} 

console.log(conditional()); 


const outside0 = 'dark'; 
const nameUser = 'Mike'; 

const theOustide = () => {
  return `Hi ${nameUser}, ` + `it's very ${outside0} outside. ` + `what do you want to do ?`; 
}; 

console.log(theOustide()); 



// scope pollution 
let num0 = 50;

const logNum = () => {
  num0 = 100; 
  return num0;  
};

logNum(); // prints 100 
console.log(num0);  

// scope pollution n°1 
let sendAsalutInFrench = 'Salut, comment vas-tu ?';

const sendAHello = () => {
  sendAsalutInFrench = 'Coucou, comment vas-tu ?'; 
  return sendAsalutInFrench; 
}; 

console.log(sendAHello()); 


let theNewColor = 'cyan';

const choiceYourColor = () => {
  theNewColor = 'red';  
  return theNewColor;  
};  

console.log(choiceYourColor());  





