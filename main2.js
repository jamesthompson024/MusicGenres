function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var getAllRecords = function() {
  $.getJSON(
      "https://api.airtable.com/v0/appqnQX3Ik0PfwHVo/HipHop?api_key=keyDlORmR31pOGDpu",
    function(airtable) {
      var html = [];
      $.each(airtable.records, function(index, record) {
        var id = record.id;
        var artist = record.fields["Artist"];
        var genre = record.fields["Genre"];
        var song1 = record.fields["Song1"];
        var song2 = record.fields["Song2"];
        var song3 = record.fields["Song3"];
        var songs = record.fields["Songs"];
        html.push(listView(id, artist, song1, song2, song3));
      });
      $(".list-view").append(html);
    }
  );
};

var listView = function(id, artist, song1, song2, song3) {
  return `
  <div class="col-sm-6">
  <div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${artist}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/${song1}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <li class="list-group-item"></li>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${song2}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <li class="list-group-item"></li>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${song3}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <li class="list-group-item"></li>
  </ul>
  <div class="card-body">

  </div>
</div>`;
};


var id = getParameterByName("id");
if (id) {
  getOneRecord(id);
} else {
  getAllRecords();
}

