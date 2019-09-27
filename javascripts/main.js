import cheese from './components/cheese.js';
import bread from './components/bread.js';
import meat from './components/meat.js'
import veggie from './components/veggies.js';
import condiment from './components/condiments.js';
import order from './components/order.js';



const init = () => {
  cheese.printCheeseOptions();
  bread.printBreadOptions();
  meat.printMeatOptions();
  veggie.printVeggieOptions();
  condiment.printCondimentOptions();
  order.printOrderButton();
};

init();