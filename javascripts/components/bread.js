import utilities from '../helpers/utilities.js'

const breads = [
    { id: "bread1", name: "Wheat", price: 300 },
    { id: "bread2", name: "White", price: 400 },
    { id: "bread3", name: "Italian", price: 300 },
    { id: "bread4", name: "Rye", price: 350 },
    { id: "bread5", name: "Garlic", price: 375 }
];    

const getSelectedBreads = () => {
    const selectedBreads = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
    for (let j = 0; j < breadCheckboxes.length; j++) {
        for (let k = 0; k < breads.length; k++) {
            if (breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id) {
                selectedBreads.push(breads[k]);
            }
        }
    }
    return selectedBreads;

};


const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++) {
        domString += `<div class="form-group form-check">
     <input type="checkbox" class="form-check-input bread" id=${breads[i].id}>
     <label class="form-check-label ml-2" for=${breads[i].id}">${breads[i].name}</label>
   </div>`;

        utilities.printToDom('bread-counter', domString)
    }
};


export default { printBreadOptions, getSelectedBreads };