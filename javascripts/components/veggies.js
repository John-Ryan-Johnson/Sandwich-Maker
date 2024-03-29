import utilities from '../helpers/utilities.js'

const veggies = [
  {id:"veggie1", name:"Lettuce", price: 50},
  {id:"veggie2", name:"Black Olives", price: 50},
  {id:"veggie3", name:"Tomatoes", price: 75},
  {id:"veggie4", name:"Red Onions", price: 50},
  {id:"veggie5", name:"Cucumbers", price: 60}
];

const getSelectedVeggies = () => {
  const selectedVeggies = [];
  const veggieCheckboxes = document.getElementsByClassName('veggie');
    for(let j = 0; j < veggieCheckboxes.length; j++) {
      for(let k = 0; k < veggies.length; k++){
        if(veggieCheckboxes[j].checked && veggieCheckboxes[j].id === veggies[k].id){
          selectedVeggies.push(veggies[k]);
        }
      }
    }
       return selectedVeggies;
  
};


const printVeggieOptions = () => {
  let domString = '';
  for(let i = 0; i < veggies.length; i++){
     domString +=`<div class="form-group form-check">
    <input type="checkbox" class="form-check-input veggie" id=${veggies[i].id}>
    <label class="form-check-label ml-2" for=${veggies[i].id}">${veggies[i].name}</label>
  </div>`

  }
  utilities.printToDom('veggie-counter',domString )
};


export default { printVeggieOptions, getSelectedVeggies };