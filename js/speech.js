'use strict';

// Озвучка немецких слов и фраз голосом браузера (Web Speech API).

const isSpeechSupported = 'speechSynthesis' in window;
let germanVoice = null;

function findGermanVoice() {
  const voices = speechSynthesis.getVoices();
  for (const voice of voices) {
    if (voice.lang === 'de-DE') {
      germanVoice = voice;
      return;
    }
  }
  // Точного совпадения нет — берём любой немецкий голос (например, de-AT)
  for (const voice of voices) {
    if (voice.lang.startsWith('de')) {
      germanVoice = voice;
      return;
    }
  }
}

function speak(text) {
  if (!isSpeechSupported || !text) {
    return;
  }
  speechSynthesis.cancel(); // прерываем то, что звучит сейчас

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.9;
  if (germanVoice) {
    utterance.voice = germanVoice;
  }
  speechSynthesis.speak(utterance);
}

// Читает длинный текст. Текст делим на предложения и ставим их в очередь:
// одно длинное высказывание некоторые браузеры обрывают на полуслове.
function speakText(text, isSlow) {
  if (!isSpeechSupported) {
    return;
  }
  speechSynthesis.cancel();

  const sentences = text.match(/[^.!?]+[.!?]*/g) || [text];
  for (const sentence of sentences) {
    const utterance = new SpeechSynthesisUtterance(sentence.trim());
    utterance.lang = 'de-DE';
    utterance.rate = isSlow ? 0.7 : 0.9;
    if (germanVoice) {
      utterance.voice = germanVoice;
    }
    speechSynthesis.speak(utterance);
  }
}

function stopSpeaking() {
  if (isSpeechSupported) {
    speechSynthesis.cancel();
  }
}

if (isSpeechSupported) {
  findGermanVoice();
  // В некоторых браузерах список голосов загружается не сразу
  speechSynthesis.onvoiceschanged = findGermanVoice;
} else {
  // Без озвучки кнопки с динамиком скрываются (см. .no-speech в style.css)
  document.documentElement.classList.add('no-speech');
}

// Кнопки с динамиком есть по всему сайту, поэтому слушаем клики на всей странице.
// Текст для озвучки лежит в атрибуте data-text.
document.addEventListener('click', function (event) {
  const button = event.target.closest('.speak-button');
  if (button) {
    speak(button.dataset.text);
  }
});
