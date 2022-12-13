const button = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

button.addEventListener('click', () => {
  paragraph.innerText = '';

  if (input.value.trim().length === 0) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }

  const inputWords = input.value;
  const arrayWords = inputWords.split(' ');

  for (let i = 0; i < arrayWords.length; i += 1) {
    const styleRand = Math.floor(Math.random() * style.length);
    const sizeRand = Math.floor(Math.random() * size.length);
    const rotationRand = Math.floor(Math.random() * rotation.length);
    const inclinationRand = Math.floor(Math.random() * inclination.length);
    paragraph.innerHTML += `<span id="word-${i + 1}" class="${style[styleRand]} ${size[sizeRand]} 
      ${rotation[rotationRand]} ${inclination[inclinationRand]}">${arrayWords[i]}</span>`;
  }
  input.value = '';
});

paragraph.addEventListener('click', (e) => {
  const styleRand = Math.floor(Math.random() * style.length);
  const sizeRand = Math.floor(Math.random() * size.length);
  const rotationRand = Math.floor(Math.random() * rotation.length);
  const inclinationRand = Math.floor(Math.random() * inclination.length);

  e.target.setAttribute('class', '');
  e.target.classList.add(
    style[styleRand],
    size[sizeRand],
    rotation[rotationRand],
    inclination[inclinationRand],
  );
});
