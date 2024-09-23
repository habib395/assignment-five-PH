//adding blog.html in index.html
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html'
})

document.getElementById('donate-one-btn').addEventListener('click', function(){
    const availableBalanceBtn = parseFloat(document.getElementById('available-balance-btn').innerText)
    const donationMoney = getDonationMoneyValueByIdName("donation-one-money")
    const donationAmount = getInputFiledValueByIdName('donate-one-input')
    if(donationAmount > 0 && availableBalanceBtn >= donationAmount){
        const TotalAvailableBtn = availableBalanceBtn - donationAmount
        document.getElementById('available-balance-btn').innerText = TotalAvailableBtn
        const totalDonationMoney = donationMoney + donationAmount
        document.getElementById('donation-one-money').innerText = totalDonationMoney
        document.getElementById('donate-one-input').value= ''
        my_modal_1.showModal()
        const titleHeading = document.getElementById('title-heading').innerText
        const div = document.createElement('div')
        div.innerHTML = `<div class="card bg-base-100 w-11/12 border mx-auto my-4">
            <div class="card-body">
            <h2 class="font-bold">${donationAmount} Taka is Donated for ${titleHeading}</h2>
            <p class="text-sm font-light">Date : ${new Date()}</p>
            </div>
            </div>`
        document.getElementById('history-section-main').appendChild(div)
    }else{
        alert('Invalid Donation Amount')
        document.getElementById('donation-amount').value= ''
    }
})
//second donate btn start here
document.getElementById('donate-two-btn').addEventListener("click", function(){
    const availableBalanceBtn = parseFloat(document.getElementById('available-balance-btn').innerText)
    const donationMoney = getDonationMoneyValueByIdName("donation-two-money")
    const donationAmount = getInputFiledValueByIdName('donate-two-input')
    if(donationAmount > 0 && availableBalanceBtn >= donationAmount){
        const TotalAvailableBtn = availableBalanceBtn - donationAmount
        document.getElementById('available-balance-btn').innerText = TotalAvailableBtn
        const totalDonationMoney = donationMoney + donationAmount
        document.getElementById('donation-two-money').innerText = totalDonationMoney
        document.getElementById('donate-two-input').value= ''
        my_modal_1.showModal()
        const titleHeading = document.getElementById('title-heading').innerText
        const div = document.createElement('div')
        div.innerHTML = `<div class="card bg-base-100 w-11/12 border mx-auto my-4">
            <div class="card-body">
            <h2 class="font-bold">${donationAmount} Taka is Donated for ${titleHeading}</h2>
            <p class="text-sm font-light">Date : ${new Date()}</p>
            </div>
            </div>`
        document.getElementById('history-section-main').appendChild(div)
    }else{
        alert('Invalid Donation Amount')
        document.getElementById('donation-amount').value= ''
    }
})
//third donate btn start here
document.getElementById('donate-three-btn').addEventListener("click", function(){
    const availableBalanceBtn = parseFloat(document.getElementById('available-balance-btn').innerText)
    const donationMoney = getDonationMoneyValueByIdName("donation-three-money")
    const donationAmount = getInputFiledValueByIdName('donate-three-input')
    if(donationAmount > 0 && availableBalanceBtn >= donationAmount){
        const TotalAvailableBtn = availableBalanceBtn - donationAmount
        document.getElementById('available-balance-btn').innerText = TotalAvailableBtn
        const totalDonationMoney = donationMoney + donationAmount
        document.getElementById('donation-three-money').innerText = totalDonationMoney
        document.getElementById('donate-three-input').value= ''
        my_modal_1.showModal()
        const titleHeading = document.getElementById('title-heading').innerText
        const div = document.createElement('div')
        div.innerHTML = `<div class="card bg-base-100 w-11/12 border mx-auto my-4">
            <div class="card-body">
            <h2 class="font-bold">${donationAmount} Taka is Donated for ${titleHeading}</h2>
            <p class="text-sm font-light">Date : ${new Date()}</p>
            </div>
            </div>`
        document.getElementById('history-section-main').appendChild(div)
    }else{
        alert('Invalid Donation Amount')
        document.getElementById('donation-amount').value= ''
    }
})