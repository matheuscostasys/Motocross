import { create } from './utilities';

const trailer = localStorage.getItem('trailer');

if (trailer !== 'assistido') {
  const dialog = create('dialog', { open: true });
  const video = create('video', {
    autoplay: true,
    src: 'trailer.mp4',
  });
  const botaoAssistir = create('button', { innerText: 'Assistir' });
  const botaoFechar = create('button', { innerText: 'Já assisti, fechar' });
  const linha = create('hr');
  const acoes = create('footer');

  botaoAssistir.onclick = () => {
    video.play();
  };

  botaoFechar.onclick = () => {
    dialog.close();
    if (!video.paused) {
      video.pause();
    }
  };

  dialog.onclose = () => {
    localStorage.setItem('trailer', 'assistido');
  };

  acoes.append(botaoAssistir, botaoFechar);
  dialog.append(video, linha, acoes);
  document.body.appendChild(dialog);
}
