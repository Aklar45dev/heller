import './App.css'
import './App.scss'
import React, { useEffect } from 'react'
import $ from 'jquery'
import AudioPlayer from 'react-audio-element'

const Podcast = props => {

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#consul').css({display: 'block'})
    $('#logo').removeClass("logo-home")
    window.addEventListener( 'pointermove', parallaxUpdate )
    props.lecteur.pause()
  })

  useEffect(() => {
    $('#pause').css({display: 'none'})
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
  },[])

  const parallaxUpdate = event => {
    let postionY = ((event.pageY/window.innerHeight)-0.5)*3
    let postionX = (((event.pageX/window.innerWidth)-0.5))*3-50
    let BGpostionY = ((event.pageY/window.innerHeight)-0.5)*1.5
    let BGpostionX = (((event.pageX/window.innerWidth)-0.5)*1.5)-50
    $('#para-pod-1').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#para-pod-2').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#bg-1').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
    $('#bg-2').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
  }

  let isBefore = true

  const toggleScenes = () => {
    if(isBefore){
      isBefore = false
      $('#after').fadeIn(500)
      $('#before').fadeOut(500)
      $('#toggleBtn').html("Après")
      return
    }
    if(!isBefore){
      isBefore = true
      $('#before').fadeIn(500)
      $('#after').fadeOut(500)
      $('#toggleBtn').html("Avant")
    }
  }


    var pcastPlayers = document.querySelectorAll('.pcast-player');
    var speeds = [ 1, 1.5, 2, 2.5, 3 ]
    var i = 0
    
    for(i=0;i<pcastPlayers.length;i++) {
      var player = pcastPlayers[i];
      var audio = player.querySelector('audio');
      var play = player.querySelector('.pcast-play');
      var pause = player.querySelector('.pcast-pause');
      var rewind = player.querySelector('.pcast-rewind');
      var progress = player.querySelector('.pcast-progress');
      var speed = player.querySelector('.pcast-speed');
      var mute = player.querySelector('.pcast-mute');
      var currentTime = player.querySelector('.pcast-currenttime');
      var duration = player.querySelector('.pcast-duration');
      
      var currentSpeedIdx = 0;
  
      pause.style.display = 'none';
      
      var toHHMMSS = function ( totalsecs ) {
          var sec_num = parseInt(totalsecs, 10); // don't forget the second param
          var hours   = Math.floor(sec_num / 3600);
          var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
          var seconds = sec_num - (hours * 3600) - (minutes * 60);
  
          if (hours   < 10) {hours   = "0"+hours; }
          if (minutes < 10) {minutes = "0"+minutes;}
          if (seconds < 10) {seconds = "0"+seconds;}
          
          var time = hours+':'+minutes+':'+seconds;
          return time;
      }
      
      audio.addEventListener('loadedmetadata', function(){
        progress.setAttribute('max', Math.floor(audio.duration));
        duration.textContent  = toHHMMSS(audio.duration);
      });
      
      audio.addEventListener('timeupdate', function(){
        progress.setAttribute('value', audio.currentTime);
        currentTime.textContent  = toHHMMSS(audio.currentTime);
      });
      
      play.addEventListener('click', function(){
        this.style.display = 'none';
        pause.style.display = 'inline-block';
        pause.focus();
        audio.play();
      }, false);
  
      pause.addEventListener('click', function(){
        this.style.display = 'none';
        play.style.display = 'inline-block';
        play.focus();
        audio.pause();
      }, false);
   
      rewind.addEventListener('click', function(){
        audio.currentTime -= 30;
      }, false);
      
      progress.addEventListener('click', function(e){
        audio.currentTime = Math.floor(audio.duration) * (e.offsetX / e.target.offsetWidth);
      }, false);
  
      speed.addEventListener('click', function(){
        currentSpeedIdx = currentSpeedIdx + 1 < speeds.length ? currentSpeedIdx + 1 : 0;
        audio.playbackRate = speeds[currentSpeedIdx];
        this.textContent  = speeds[currentSpeedIdx] + 'x';
        return true;
      }, false);
  
      mute.addEventListener('click', function() {
        if(audio.muted) {
          audio.muted = false;
          this.querySelector('.fa').classList.remove('fa-volume-off');
          this.querySelector('.fa').classList.add('fa-volume-up');
        } else {
          audio.muted = true;
          this.querySelector('.fa').classList.remove('fa-volume-up');
          this.querySelector('.fa').classList.add('fa-volume-off');
        }
      }, false);
    }
    
    

  return (
    <div className="page">
      
      <div className="gradient"><img src="./gradient.png" /></div>
      <div className="gradient2"><img src="./gradient.png" /></div>
      <div className="page-title-font">TERRE DE SPORT</div>
      <div className="page-subtitle-font">le rugby au coeur du parc</div>
      <div className="pod-container">
          <div className='para-unveil'>
            <div id="after">
              <img id='bg-1' src="./img/page3/après-plan-2.jpg" />
              <img id='para-pod-1' src="./img/page3/après-plan-1.png" />
            </div>
            <div id="before">
              <img id='bg-2' src="./img/page3/avant-plan-1.png" />
              <img id='para-pod-2' src="./img/page3/avant-plan-2.png" />
            </div>
          </div>
            <button id="toggleBtn" onClick={() => toggleScenes()}>Avant</button>
          <AudioPlayer src="https://heller-bucker.s3.eu-west-3.amazonaws.com/RUGBY.mp3"/>
          
      </div>
      <div className="pcast-player">
            <div className="pcast-player-controls">
              <button className="pcast-play"><img src='./play.png' /><span>Play</span></button>
              <button className="pcast-pause"><img src='./pause.png' /><span>Pause</span></button>
              <button className="pcast-rewind"><img src='./rewind.png' /><span>Rewind</span></button>
              <span className="pcast-currenttime pcast-time">00:00</span>
              <progress className="pcast-progress" value="0"></progress>
              <span className="pcast-duration pcast-time">00:00</span>
              <button className="pcast-speed">1x</button>
            </div>
            <audio preload="preload" src="https://heller-bucker.s3.eu-west-3.amazonaws.com/RUGBY.mp3"></audio>
          </div>
    </div>
  )
}

export default Podcast