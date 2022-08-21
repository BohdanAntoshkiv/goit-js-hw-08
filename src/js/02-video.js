import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// player
//   .getCurrentTime()
//   .then(function (seconds) {
//     // seconds = the current playback position
//   })
//   .catch(function (error) {
//     // an error occurred
//   });

player.on(
  'timeupdate',
  throttle(function getTime(event) {
    const currentSecond = JSON.stringify(event.seconds);

    localStorage.setItem(LOCALSTORAGE_KEY, currentSecond);
  }),
  1000
);
// Мій варіант який не працював----------------------------------------------------------------------------------
// const timeFromLocalStor = Number(localStorage.getItem(LOCALSTORAGE_KEY));
// const timeFromLocalStor = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

// player.setCurrentTime(0 || timeFromLocalStor);

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (savedTime) {
  const timeFromLocalStor = JSON.parse(savedTime);

  player.setCurrentTime(timeFromLocalStor);
}
