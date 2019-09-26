import utilities from '../helpers/utilities.js'

const meats = [
  {id:"meat1", name:"turkey", price:"3.00"},
  {id:"meat2", name:"ham", price:"3.00"},
  {id:"meat3", name:"chicken", price:"3.00"},
  {id:"meat4", name:"tuna", price:"2.00"},
  {id:"meat5", name:"roast beef", price:"3.50"}
];

const getSelectedMeats = () => {
  const selectedMeats = [];
  const meatCheckboxes = document.getElementsByClassName('meat');
    for(let j = 0; j < meatCheckboxes.length; j++) {
      for(let k = 0; k < meats.length; k++){
        if(meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id){
          selectedMeats.push(meats[k]);
        }
      }
    }
       return selectedMeats;
  
};


const printMeatOptions = () => {
  let domString = '';
  for(let i = 0; i < meats.length; i++){
     domString +=`<div class="form-group form-check">
    <input type="checkbox" class="form-check-input meat" id=${meats[i].id}>
    <label class="form-check-label" for=${meats[i].id}">${meats[i].name}</label>
  </div>`
  }
  
 

  utilities.printToDom('meat-counter',domString )
};


export default { printMeatOptions, getSelectedMeats };