import cheese from './cheese.js';
import bread from './bread.js';
import meat from './meat.js';
import veggie from './veggies.js';
import condiment from './condiments.js';
import utilities from '../helpers/utilities.js';



const createFinalOrder = (items) => {
  let domString2 = '';
  for(let i = 0; i < items.length; i++){
    domString2 += `<p>${items[i].name}</p>`
  }
  return domString2
}


const createOrderEvent = () => {
  const selectedCheeses = cheese.getSelectedCheeses();
  const selectedBreads = bread.getSelectedBreads();
  const selectedMeats = meat.getSelectedMeats();
  const selectedVeggies = veggie.getSelectedVeggies();
  const selectedCondiments = condiment.getSelectedCondiments();
  
  let domString = createFinalOrder(selectedCheeses, selectedBreads, selectedMeats, selectedVeggies, selectedCondiments);
  utilities.printToDom('order', domString)
}


const printOrderButton = () => {
  const domString = `<button class="btn btn-secondary" id="order-button">Add</button>`
  utilities.printToDom('final-order', domString);
  document.getElementById('order-button').addEventListener('click', createOrderEvent);
};








export default { printOrderButton };