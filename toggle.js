document.getElementById('history-head-btn').addEventListener('click', function(){
    const historySection = document.getElementById('history-section-main')
    historySection.classList.remove('hidden')
    const donateSection = document.getElementById('donate-section-main')
    donateSection.classList.add('hidden')
})