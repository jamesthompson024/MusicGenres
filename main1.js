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
        "https://api.airtable.com/v0/appqnQX3Ik0PfwHVo/Rock?api_key=keyDlORmR31pOGDpu",
      function(airtable) {
        var html = [];
        $.each(airtable.records, function(index, record) {
          var id = record.id;
          var artist = record.fields["Artist"];
          html.push(listView(id, artist));
        });
        $(".list-view").append(html);
      }
    );
  };
  
  var listView = function(id, artist) {
    return `
    <div class="col-sm-6">
    <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${artist}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
  };


  var id = getParameterByName("id");
  if (id) {
    getOneRecord(id);
  } else {
    getAllRecords();
  }

