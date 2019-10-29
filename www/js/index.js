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
		.addEventListener('loadstop', function() {
			ref.insertCSS({
				"code": ".youtube_done_button { position: fixed; bottom: 0; width: 100%; background: rgba(0, 0, 0, 0.8); color: #2196F3; padding: 10px; font-size: 20px;}"
			});
			ref.executeScript({
				"code": "(function() { var body = document.querySelector('body'); var button = document.createElement('div'); button.innerHTML = 'Done'; button.classList.add('youtube_done_buttonbutton.onclick = function() { localStorage.setItem('close', 'true'); }; body.appendChild(button); })();"
			});
		})
		
		
		ref.addEventListener('loadstart', function(event) { 
			trenutni_url = event.url; 			
		});
    }

};
