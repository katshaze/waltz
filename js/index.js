// VARIABLES //////
let song, binCount, bins, smoothing, fft;
let canvas, spectrum, wSeg, w, hSeg, height;
function preload() {
  // add load method with the path to your sound
  // soundFile = loadSound('../../music/Waltz-#2.mp3');
  song = loadSound('../audio/waltz.mp3');
};

function setup() {
  // CANVAS //
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  background(30);
  // fill(0);
  stroke(0);
  // SOUND ANALYSIS //
  binCount = 256;
  bins = new Array(binCount);
  smoothing = 0.6;
  fft = new p5.FFT(smoothing, binCount);
  fft.setInput(song);
};

function draw() {
  spectrum = fft.analyze();
  for (let i = 1; i < spectrum.length; i++) {

    // w = random(100,windowWidth);
    w = windowWidth;
    hSeg = windowHeight/255;
    h = spectrum[i] * 2;
    line(0,0,w,h);
    line(0,0,w/3,h);
    line(w,h,w/3,h);
    stroke(`rgba(100,${h},200,0.25)`);
  }
};

const random = function(min,max) {
  // getting a random integer:
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

$(document).ready(function() {

  // USER CONTROLS FOR PLAYING AUDIO /////////////////////
  $('#play-pause').on('click', function() {
    let text = $('#play-pause').text();
    if (text === 'Play') {
      song.play();

      $('#play-pause').text('Pause');
    } else {
      song.pause();
      $('#play-pause').text('Play');
    }
  });
  $('#stop').on('click', function() {
    song.pause();
    song.currentTime = 0;
    $('#play-pause').text('Play');
  })
}); // end of doc ready
