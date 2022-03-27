var _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function playerTime(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  const currentPlayerTime = localStorage.getItem(LOCALSTORAGE_KEY);
}
player.on('timeupdate', _.throttle(playerTime, 1000));

const getStorageKey = localStorage.getItem(LOCALSTORAGE_KEY);
const parseStorageKey = JSON.parse(getStorageKey);

player.setCurrentTime(parseStorageKey.seconds);
