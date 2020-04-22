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
        "https://api.airtable.com/v0/appqnQX3Ik0PfwHVo/R&B?api_key=keyDlORmR31pOGDpu",
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
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">
      Cras justo odio
    </a>
    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
    <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
    <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
    <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
  </div>`;
  };


  var id = getParameterByName("id");
  if (id) {
    getOneRecord(id);
  } else {
    getAllRecords();
  }

