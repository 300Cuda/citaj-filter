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
		.addEventListener('loadstop', function() {
			var btn = document.createElement("BUTTON");   // Create a <button> element
			btn.innerHTML = "CLICK ME";                   // Insert text
			btn.onclick = 'otherShare()';
			document.body.appendChild(btn); 
		})
		
		
		ref.addEventListener('loadstart', function(event) { 
			trenutni_url = event.url; 			
		});
    }

};
