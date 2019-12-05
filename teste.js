
$(document).ready(function () {
  $.get(
    'https://www.googleapis.com/youtube/v3/search', {
    key: 'AIzaSyAGgPfgloMNl6id3w9uv3O8EsAgArp_7k0',
    part: 'snippet',
    q: 'Musica filme matilda',
    type: 'video',
  },
    function (data) {
      var output;
      $.each(data.items, function (i, items) {
        console.log(items)
        vid = items.id.videoId
        vidTitles = items.snippet.title
        console.log(vid)
        console.log(vidTitles)
        //output = '<li>' + vidTitles + '</li>';
        output = '<li><iframe src=\"//www.youtube.com/embed/' + vid + '\"></iframe></li>'

        $('#results').append(output);
      })
    }
  );
});