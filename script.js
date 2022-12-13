const button = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');

button.addEventListener('click', () => {
  paragraph.innerText = '';

  if (input.value.trim().length === 0) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }

  const inputWords = input.value;
  const arrayWords = inputWords.split(' ');

  for (let i = 0; i < arrayWords.length; i += 1) {
    paragraph.innerHTML += `<span>${arrayWords[i]}</span>`;
  }
});
