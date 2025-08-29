// Heart Icon
const heartIcons = document.getElementsByClassName('heart-icon');
for(const heartIcon of heartIcons){
  heartIcon.addEventListener('click', function(){
    const heartBox = parseInt(document.getElementById('heart-box').innerText);
    const currentBalance = heartBox + 1;
    document.getElementById('heart-box').innerText = currentBalance;
  })
}

// Call Section
const callButtons = document.getElementsByClassName('call-btn');
const historySection = document.getElementById('history-section');
const coinBox = document.getElementById('coin-box');
for(const btn of callButtons){
  btn.addEventListener('click', function(){
    let coins = parseInt(coinBox.innerText);

    const card = btn.closest('.card');
    const title = card.querySelector('.card-title').innerText;
    const number = card.querySelector('.card-number').innerText;
    if(coins >= 20){
      const liveTime = new Date().toLocaleTimeString();
      alert('📞Calling... \n' + title + ' : ' + number);
      coinBox.innerText = coins - 20;

      const historyCard = document.createElement('div');
      historyCard.innerHTML = `<div class="flex justify-between md:gap-5 bg-[#fafafa] rounded-lg p-4 mb-2">
          <div>
            <h2 class="font-bold">${title}</h2>
            <p>${number}</p>
          </div>
          <div class="flex items-center"><h2>${liveTime}</h2></div>
        </div>`;
    
    historySection.appendChild(historyCard);
    }
    else{
      alert('Not enough coins!');
    }
  });
}

// Clear function
document.getElementById('clear-btn').addEventListener('click', function(){
  while(historySection.children.length > 1){
    historySection.removeChild(historySection.lastChild);
  }
})