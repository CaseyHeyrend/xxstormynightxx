document.getElementById("searchButton").onclick = function() {
  if (encodeURIComponent(document.getElementById("stormName").value) === '' || null) {
    p = document.createElement("P");
    p.innerHTML = "Please Enter a storm";
    p.setAttribute('id', 'errorMessage');
    document.getElementById('error').appendChild(p);
    document.getElementById('error').className = 'error_found';
    var errorExists = document.getElementById("errorMessage");
    setTimeout(function(){
    errorExists.parentNode.removeChild(errorExists);
    document.getElementById('error').className = 'error';
}, 5000);
  } else {
  getStormType(); 
  }
  }