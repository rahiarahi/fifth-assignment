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
for(const callBtn of callButtons){
  callBtn.addEventListener('click', function(){
    const coinBox = parseInt(document.getElementById('coin-box').innerText);
    if(coinBox >= 20){
      const card = callBtn.closest('.card');
      const h2Text = card.querySelector('.card-title').innerText;
      const h1Text = card.querySelector('.card-number').innerText;
      alert('Calling ' + h2Text + ' ' + h1Text);
      document.getElementById('coin-box').innerText = coinBox - 20;
    }
    else{
      alert('Not enough coins!');
    }
  })
}