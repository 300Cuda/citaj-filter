
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
        var ekran = document.getElementById("ekran");
		cordova.InAppBrowser.open('https://www.citajfilter.com','random_string', 'hideurlbar=yes,toolbar=no,location=no,status=no,menubar=no,zoom=no');
		

    }
};
