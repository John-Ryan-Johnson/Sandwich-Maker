import utilities from '../helpers/utilities.js'

const condiments = [
  {id:"condiment1", name:"Ranch", price:".50"},
  {id:"condiment2", name:"Mustard", price:".50"},
  {id:"condiment3", name:"Mayo", price:".60"},
  {id:"condiment4", name:"Salt", price:".40"},
  {id:"condiment5", name:"Pepper", price:".40"}
];

const getSelectedCondiments = () => {
  const selectedCondiments = [];
  const condimentCheckboxes = document.getElementsByClassName('condiment');
    for(let j = 0; j < condimentCheckboxes.length; j++) {
      for(let k = 0; k < condiments.length; k++){
        if(condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id){
          selectedCondiments.push(condiments[k]);
        }
      }
    }
       return selectedCondiments;
  
};


const printCondimentOptions = () => {
  let domString = '';
  for(let i = 0; i < condiments.length; i++){
     domString +=`<div class="form-group form-check">
    <input type="checkbox" class="form-check-input condiment" id=${condiments[i].id}>
    <label class="form-check-label" for=${condiments[i].id}">${condiments[i].name}</label>
  </div>`

  utilities.printToDom('condiment-counter',domString )
  }
};


export default { printCondimentOptions, getSelectedCondiments};