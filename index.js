
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
    let record = {
        concept: itemConcept.value,
        amount: parseInt(itemAmount.value),
    };
    recordList.push(record)
    console.log(recordList)
    
    
    console.log(record);

    itemConcept.value = "";
    itemAmount.value = "";
    

   
    drawRecord(record)
    drawTotals()
    
    //generateRecord(record)

});

function drawTotals(){
    let expenses = 0
    let incomes = 0
    recordList.forEach((record) => {
        if(record.amount > 0){
            incomes += parseInt(record.amount)
        }else{
            expenses +=parseInt(record.amount)
        }
      });
      
      
    totalEntry.innerHTML = `${incomes}`
    totalSpen.innerHTML = `${expenses}`
    saving.innerHTML = `${incomes}` - `${expenses}` 
}


function deleteRecord(){
     
    const removeConfirmation = window.confirm("¿Eliminar movimiento?");
    let removeConcept = document.querySelector("#idDelete")
    if (removeConfirmation) {
      
      removeConcept.remove("idDelete");
    }
  }


function drawRecord(records){

    let newRecord = ""

    const newLine = document.createElement("li");

    newLine.setAttribute("id", "idDelete");
  
    if (records.amount > 0){
        newRecord = `
        <span id="spn" class="green"> ${records.concept}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp${records.amount}</span>
        <button onclick="deleteRecord()">X</button>
        `;
        
    } else{
        newRecord = `
        <span id="spn" class="red">${records.concept}&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp${records.amount}</span>`;
    }    
    
        newLine.innerHTML = newRecord;
        recordsList.appendChild(newLine)
}







    


















    
    

