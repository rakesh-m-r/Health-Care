if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg=>{
        console.log('Registered',reg);
      }).catch(err=>{
        console.log('Registeration failed',err);
      });
  });
}
window.addEventListener('beforeinstallPrompt',(e)=>{
  e.preventDefault();
  deferredPrompt=e;
  btnAdd.style.display='block';
btnAdd.style.position=' absolute';
});


function hosploc() {
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError)
    function onSuccess(position) {
      var loc = "https://www.google.com/maps/search/hospital+near+me/@" + position.coords.latitude + "," + position.coords.longitude + ",16.74z";
      window.location.href = loc;
      //alert('Latitude:'+position.coords.latitude+'\n'+'Longitude:'+position.coords.longitude+'\n');
    }
    function onError(error) {
      alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
  }
/*
  function hosploc() {
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError)
    function onSuccess(position) {
      var loc = "https://www.google.com/maps/search/hospital+near+me/@" + position.coords.latitude + "," + position.coords.longitude + ",16.74z";
      document.getElementById("loc").innerHTML += "<iframe src="+loc+" height=100%></ifreme>"
      //alert('Latitude:'+position.coords.latitude+'\n'+'Longitude:'+position.coords.longitude+'\n');
    }
    function onError(error) {
      alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
    }*/
