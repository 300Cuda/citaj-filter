 window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}
 
 function otherShare(){
	 window.plugins.socialsharing.share('General share Message', null, null, null);
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
		// Once the InAppBrowser finishes loading
		ref.addEventListener("loadstop", function() {

		  // 1st Clear out 'hidden' in localStorage for subsequent opens.
		  // 2nd Create the button
		  ref.executeScript({
			code: "var key = 'hidden'; var keyval = 'yes'; localStorage.setItem('hidden',''); var button = document.createElement('Button'); button.innerHTML = 'Share'; button.style = 'top:0;right:0;position:fixed;'; document.body.appendChild(button); button.setAttribute('onclick','alert('TUSMO');');"
		  });
		
		ref.addEventListener('loadstart', function(event) { 
			trenutni_url = event.url; 			
		});
    }

};
