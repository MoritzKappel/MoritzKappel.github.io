function openTab(evt, tab_id) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab_item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_button");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-black", "");
    }
    document.getElementById(tab_id).style.display = "block";
    evt.currentTarget.className += " w3-black";
    document.title = "Moritz Kappel | " + tab_id
  }