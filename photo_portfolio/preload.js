$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("./mariaimages/ga-1.jpg",
"./mariaimages/ga-2.jpg",
"./mariaimages/ga-3.jpg",
"./mariaimages/ga-4.jpg",
"./mariaimages/ga-5.jpg",
"./mariaimages/ga-6.jpg",
"./mariaimages/ga-7.jpg",
"./mariaimages/ga-8.jpg",
"./mariaimages/ga-9.jpg",
"./mariaimages/ga-10.jpg",
"./mariaimages/ga-11.jpg",
"./mariaimages/ga-12.jpg",
"./mariaimages/ga-13.jpg",
"./mariaimages/ga-14.jpg",
"./mariaimages/ga-15.jpg",);
