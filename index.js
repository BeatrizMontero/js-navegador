
const newMovement = document.querySelector("#newMovement")
const recordsList = document.querySelector("#records")
const sumIncome = document.querySelector("#entry")
const sumExpense =  document.querySelector("#spen")
const totalEntry  = document.querySelector("#totalEntry")
const totalSpen = document.querySelector("#totalSpen")
let valueList = []



newMovement.addEventListener("submit", event => {
    event.preventDefault();

    const itemConcept = document.querySelector("#concept");
    const itemAmount = document.querySelector("#amount");
    let record = {
        concept: itemConcept.value,
        amount: parseInt(itemAmount.value),
    };
    
    
    console.log(record);

    itemConcept.value = "";
    itemAmount.value = "";
    

   
    drawRecord(record)
    drawAccounts(record)
    
    //generateRecord(record)

});

function drawAccounts(record){

    if(record.amount !== null && record.amount >= 0 ){
        totalEntry.innerHTML = `${record.amount}`;
    }else{
        totalSpen.innerHTML = `${record.amount}`;
    }
    
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







    


















    
    

