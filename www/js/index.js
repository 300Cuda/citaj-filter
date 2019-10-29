
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
		var browser = this.inAppBrowser.create(initialURL, meta, opcije);
        if (browser.on('loadstart').subscribe)
		browser.on('loadstart').subscribe((e: InAppBrowserEvent) => {
		if (e && e.url)
			url = e.url;
			alert (url)
		});
		
		

    }

};
