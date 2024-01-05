document.addEventListener('DOMContentLoaded', function () {
  var ulElement = document.getElementById('team-list');

  if (ulElement) {
    var listItems = ulElement.getElementsByTagName('li');

    for (var i = 0; i < listItems.length; i++) {
      var imageUrl = listItems[i].querySelector('img').src;
      var captionHTML = listItems[i].querySelector('.caption').innerHTML;
      listItems[i].setAttribute('href', imageUrl);
      listItems[i].setAttribute('caption', captionHTML);
    }
  }
});

$('ul li').magnificPopup({
  image: {
    markup: '<div class="mfp-figure">' +
      '<div class="mfp-close"></div>' +
      '<div class="mfp-img"></div>' +
      '<div class="mfp-bottom-bar">' +
      '<div class="mfp-title"></div>' +
      '<div class="mfp-counter"></div>' +
      '</div>' +
      '</div>',
    cursor: 'mfp-zoom-out-cur',
    titleSrc: 'caption',
    verticalFit: true,
    tError: '<a href="%url%">The image</a> could not be loaded.'
  },
  gallery: {
    enabled: true
  },
  type: 'image'
});