const button1 = document.getElementById('sem1-btn');
const button2 = document.getElementById('sem2-btn');
const paragraph1 = document.getElementById('sem1-content');
const paragraph2 = document.getElementById('sem2-content');
const vanishDiv = document.getElementById('vanish');
button1.addEventListener('click', function() {
  paragraph1.style.display = 'block';
  paragraph2.style.display = 'none';
  vanishDiv.style.display = 'none';
});
button2.addEventListener('click', function() {
  paragraph2.style.display = 'block';
  paragraph1.style.display = 'none';
  vanishDiv.style.display = 'none';
});
function redirect() {
  window.location.href = "";
}