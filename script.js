
var map = document.getElementById("map");
var vid = document.getElementById("news1");

// map.style.display = "none";

// vid.onplaying = function() {
//     map.style.display = "none";
// };

vid.onended = function() {
  // vid.style.display = "none";
  
  Fancybox.show(
  [
    {
      src: "#map",
      type: "inline",
    },
  ],
  {
    infinite: false,
  }
);
};


function changeSource(url) {
   var video = document.getElementById('news1');
   video.src = url;
   video.play();
  Fancybox.close();
}