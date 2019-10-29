 
 
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
		// Once the InAppBrowser finishes loading
		ref.addEventListener("loadstop", function() {

		  // 1st Clear out 'hidden' in localStorage for subsequent opens.
		  // 2nd Create the button
		  ref.executeScript({
			code: "var key = 'hidden'; var keyval = 'yes'; localStorage.setItem('hidden',''); var button = document.createElement('Button'); button.innerHTML = 'Share'; button.style = 'top:0;right:0;position:fixed;'; document.body.appendChild(button); button.setAttribute('onclick','localStorage.setItem(key,keyval);');"
		  });

		  // Start an interval
		  var loop = setInterval(function() {

			// Execute JavaScript to check if 'hidden' is 'yes' in the
			// child browser's localStorage.
			ref.executeScript({
				code: "localStorage.getItem( 'hidden' )"
			  },
			  function(values) {
				var hidden = values[0];

				// If 'hidden' is equal to 'yes', clear the interval and hide the InAppBrowser.
				if (hidden === 'yes') {
					otherShare(trenutni_url);
					clearInterval(loop);
					ref.hide();
				  
				}
			  }
			);
		  });
		});

    }

};
