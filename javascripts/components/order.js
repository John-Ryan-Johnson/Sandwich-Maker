import cheese from './cheese.js';
import bread from './bread.js';
import meat from './meat.js';
import veggie from './veggies.js';
import condiment from './condiments.js';
import utilities from '../helpers/utilities.js';



const createFinalOrder = (items) => {
  let domString2 = '';
  let totalPrice = 0;
  for(let i = 0; i < items.length; i++){
    domString2 += `<h5 class="text-white mt-2">${items[i].name} $${(items[i].price/100).toFixed(2)}</h5>`
                   
    totalPrice += items[i].price
  }

  const priceString = (totalPrice/100).toFixed(2)
  utilities.printToDom("total", "$" + priceString)
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