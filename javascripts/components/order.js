import cheese from './cheese.js';
import bread from './bread.js';
import meat from './meat.js';
import veggie from './veggies.js';
import condiment from './condiments.js';
import utilities from '../helpers/utilities.js';



const createFinalOrder = (items) => {
  let domString2 = '';
  for(let i = 0; i < items.length; i++){
    domString2 += `<h4>${items[i].name} $${items[i].price}</h4>`
  } 
 return domString2
}

const createOrderEvent = () => {
  const selectedCheeses = cheese.getSelectedCheeses();
  const selectedBreads = bread.getSelectedBreads();
  const selectedMeats = meat.getSelectedMeats();
  const selectedVeggies = veggie.getSelectedVeggies();
  const selectedCondiments = condiment.getSelectedCondiments();
  const sandwichDone = selectedCheeses.concat(selectedBreads, selectedMeats, selectedVeggies, selectedCondiments);
  
  
   let domString2 = createFinalOrder(sandwichDone);
  utilities.printToDom('order', domString2)
}


const printOrderButton = () => {
  const domString = `<button class="btn btn-secondary" id="order-button">Add to Cart</button>`
  utilities.printToDom('final-order', domString);
  document.getElementById('order-button').addEventListener('click', createOrderEvent);
};








export default { printOrderButton };