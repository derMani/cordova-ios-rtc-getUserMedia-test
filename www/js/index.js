var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', onDeviceReady, false);

  }
};

var video;
var localStream;

function stopAllStreams() {
  if (localStream) {
    localStream.getTracks().forEach(function(track) {
      track.stop();
    });
  }
}

function gum(width) {
  if (width) {
    var constraints = {
      audio: false,
      video: {
        width: {
          min: width,
          max: width
        },
      }
    };
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
      localStream = stream;
      video.src = URL.createObjectURL(stream);
    }, function(err) { console.log(err) });
  }
}

function onDeviceReady() {
  video = document.getElementById('localVideo');
  cordova.plugins.iosrtc.observeVideo(video);
  console.log('Device Ready');
  cordova.plugins.iosrtc.registerGlobals();

  var gumButton640 = document.getElementById('getUserMedia640');
  gumButton640.addEventListener("click", function() {
    stopAllStreams();
    gum(640);
  });

  var gumButton1280 = document.getElementById('getUserMedia1280');
  gumButton1280.addEventListener("click", function() {
    stopAllStreams();
    gum(1280);
  });
}

app.initialize();