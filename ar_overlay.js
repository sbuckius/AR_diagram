let video;
let overlayImage;

function preload() {
  overlayImage = loadImage('overlay.png'); // Replace with your image filename
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Access rear camera on mobile, or default webcam on desktop
  video = createCapture({
    video: {
      facingMode: { ideal: "environment" }
    },
    audio: false
  });

  video.size(width, height);
  video.hide();
}

function draw() {
  image(video, 0, 0, width, height);

  // Scale overlay to match canvas width
  let overlayW = width;
  let overlayH = overlayImage.height * (width / overlayImage.width);
  image(overlayImage, 0, height - overlayH, overlayW, overlayH);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
