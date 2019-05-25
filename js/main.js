(() =>{
  //this is a self invoking fucntion


  //select elements with JS
  //setting up a variable using the let keyword,
  //and using CSS selector to find the element we want to use

  //let stores the reference to element as  a variable (in memory)
let textboxBack = document.querySelector('#mytextboxBack');
iconButton = document.querySelector('#iconButton');
closeBtn = document.querySelector('.close');

function openModal() {
  textboxBack.style.display = 'block';
}

function closeModal() {
  textboxBack.style.display = 'none';
}

iconButton.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal)

})();
