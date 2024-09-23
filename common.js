//donation Amount
function getInputFiledValueByIdName(id){
    const secondInput = parseFloat(document.getElementById(id).value)
    return secondInput
}

//donation Money
function getDonationMoneyValueByIdName(id){
    const secondValue =  parseFloat(document.getElementById(id).innerText)
    return secondValue
}