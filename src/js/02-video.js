import Player  from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const KEY_TIME = "videoplayer-current-time"

player = new Player(iframe);
dataSave();
function dataSave() {
    const saveData = JSON.parse(localStorage.getItem(KEY_TIME));
    if (saveData) {
        player.setCurrentTime(saveData)
    }
}
player.on('timeupdate', throttle(timeData,1000));


function timeData(evt) {
    const timeNow= evt.seconds ; 
    localStorage.setItem(KEY_TIME, JSON.stringify(timeNow));

}