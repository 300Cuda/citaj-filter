 var brojac = 0;
 var trenutni_url = '';
 window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}
 

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

		var initialURL = 'https://www.citajfilter.com'
		var opcije = 'hideurlbar=yes,toolbar=no,location=no,status=no,menubar=no,zoom=no'
		var meta = '_blank'
		var ref = cordova.InAppBrowser.open(initialURL, meta, opcije);
		ref.addEventListener('loadstart', function(event) { 
			trenutni_url = event.url; 			
		});
		function otherShare(){
			window.plugins.socialsharing.share(null, null,null,trenutni_url);
		 };
		ref.addEventListener("loadstop", function() {
		  ref.executeScript({
			code: "var sbutton = document.createElement('Button'); sbutton.innerHTML = 'Share'; sbutton.style = 'top:0;right:0;position:fixed;color:#fcbc50'; document.body.appendChild(sbutton);sbutton.setAttribute('id','share');"
			
		  });
		});
		if (document.getElementById('share') != null){
			document.getElementById('share').onclick = otherShare();
		}
    }
};
