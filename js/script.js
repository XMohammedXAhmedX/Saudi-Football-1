
 name = window.prompt( "please enter your name" );




    alert("مرحبًا بك يا ," + name + " في موقع كرة القدم السعودية ");





if (!localStorage.visitCount) {
    localStorage.visitCount = 0;
}
localStorage.visitCount++;
document.querySelector('main').innerHTML += `<p>عدد زياراتك لهذا الموقع: ${localStorage.visitCount}</p>`;



const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener('input', () => {
  button.disabled = !input.value;
});














