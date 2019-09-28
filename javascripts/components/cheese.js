import utilities from '../helpers/utilities.js'


const cheeses = [
  {id:"cheese1", name:"Swiss", price: ".50"},
  {id:"cheese2", name:"Mozzarella", price: ".60"},
  {id:"cheese3", name:"Monterey", price: ".90"},
  {id:"cheese4", name:"Parmesan", price: ".40"},
  {id:"cheese5", name:"Cheddar", price: ".75"}
];

const getSelectedCheeses = () => {
  const selectedCheeses = [];
  const cheeseCheckboxes = document.getElementsByClassName('cheese');
    for(let j = 0; j < cheeseCheckboxes.length; j++) {
      for(let k = 0; k < cheeses.length; k++){
        if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id){
          selectedCheeses.push(cheeses[k]);
        }
      }
    }
       return selectedCheeses;
  
};


const printCheeseOptions = () => {
  let domString = '';
  for(let i = 0; i < cheeses.length; i++){
     domString +=`<div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" id=${cheeses[i].id}>
    <label class="form-check-label ml-2" for=${cheeses[i].id}">${cheeses[i].name}</label>
  </div>`

  }
  utilities.printToDom('cheese-counter',domString )
};


export default { printCheeseOptions, getSelectedCheeses };