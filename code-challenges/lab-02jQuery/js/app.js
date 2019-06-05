
function startApp(){

  loadData();

  attachListeners();

}

function loadData (){

  const success = photos => displayPage(photos);

  const failure = error => console.error(error);

  $.get('data/page-1.json', 'json')
    .then(success)
    .catch(failure);
}


function displayPage(photos) {

  photos.forEach (photo => {
    const $newPhoto = $ ('#photo-template').clone();

    $newPhoto.find('h2').text(photo.title);
    $newPhoto.find('img').attr('src', photo.image_url);
    $newPhoto.find('p').text(photo.description);
    $newPhoto.removeClass('#photo-template');
    // $newPhoto.attr('data-type', photo.keyword);

    $('main').append($newPhoto);
    // console.log('photo',photo.title);

  });
}


function attachListeners () {
  $('input').on('change', event => {
    const $keyword= $(event.target);
    const choice = $choice.val();

    if (type === 'all') {

      $('li').not('#photo-template').show();
    } else if (type === 'keyword') {
      $('li').hide();
      $('li[data-type="keyword"]').show();
    } else {
      $('li').hide();
      $('li[data-type="sweet"]').show();
    }
  });
}

$(startApp);
