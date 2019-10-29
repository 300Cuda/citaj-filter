 var brojac = 0;
 
 window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}
 
 function otherShare(url){
	 window.plugins.socialsharing.share(null, null,null,url);
  };
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');

		
		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		var trenutni_url = ''
		var initialURL = 'https://www.citajfilter.com'
		var opcije = 'hideurlbar=yes,toolbar=no,location=no,status=no,menubar=no,zoom=no'
		var meta = '_blank'
		var ref = cordova.InAppBrowser.open(initialURL, meta, opcije);
		ref.addEventListener('loadstart', function(event) { 
			trenutni_url = event.url; 			
		});
		ref.addEventListener("loadstop", function() {
		  ref.executeScript({
			code: "var button = document.createElement('Button'); button.innerHTML = 'Share';button.onclick = function () {otherShare("+trenutni_url+")}; button.style = 'top:0;right:0;position:fixed;color:#fcbc50'; document.body.appendChild(button); "
		  });
		});
    }
};
