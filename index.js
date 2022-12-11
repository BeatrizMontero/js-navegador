
const newMovement = document.querySelector("#newMovement")
const recordsList = document.querySelector("#records")
let sumIncome = document.querySelector("#entry")
let sumExpense =  document.querySelector("#spen")
let saving = document.querySelector("#savings")
let totalEntry  = document.querySelector("#totalEntry")
let totalSpen = document.querySelector("#totalSpen")
let recordList = []




newMovement.addEventListener("submit", event => {
    event.preventDefault();

    const itemConcept = document.querySelector("#concept");
    const itemAmount = document.querySelector("#amount");
    const max = 100
    
    let record = {
        concept: itemConcept.value,
        amount: parseFloat(itemAmount.value),
        id : Math.floor(Math.random() * max),
    };

    recordList.push(record)
    console.log(recordList)
    
    
    console.log(record);

    itemConcept.value = "";
    itemAmount.value = "";
    

   
    drawRecord(record)
    drawTotals()
    
    

});


function drawTotals(){
    let expenses = 0
    let incomes = 0
    recordList.forEach((record) => {
        if(record.amount > 0){
            incomes += parseFloat(record.amount)
        }else{
            expenses +=parseFloat(record.amount)
        }
      });
      
      
    totalEntry.innerHTML = `${incomes}`
    totalSpen.innerHTML = `${expenses}`
    saving.innerHTML = `${incomes + expenses}` 
}


function deleteRecord(id){
     
    const removeConfirmation = window.confirm("¿Eliminar movimiento?");
   
    if (removeConfirmation) {
      const removeConcept = document.getElementById(id);
      removeConcept.remove(id);
    }
  }


function drawRecord(records){

    let newRecord = ""

    const newLine = document.createElement("li");

    newLine.setAttribute("id", records.id);
  
    if (records.amount > 0){
        newRecord = `
        <span id="spn" class="green"> ${records.concept}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +${records.amount}</span>
        <button class = "red" onclick="deleteRecord(${records.id})">X</button>
        `;
        
    } else{
        newRecord = `
        <span id="spn" class="red">${records.concept}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${records.amount}</span>
        <button class = "red" onclick="deleteRecord(${records.id})">X</button>`;
    }    
    
        newLine.innerHTML = newRecord;
        recordsList.appendChild(newLine)
}







    


















    
    

