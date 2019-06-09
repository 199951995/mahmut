var er=[];

chrome.windows.getAll({populate:true}, function(windows) {
	windows.forEach(function(window){
		window.tabs.forEach(function(tab){
						alert(document.all[2].outerHTML);
						er.push( tab.url + "'\n");

					});

});
});
console.log(1);
2.
{
  "name": "Page Redder",
  "description": "Make the current page red",
  "version": "2.0",
 
 "permissions": [
          "tabs"
        ],
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  "browser_action": {
    "default_title": "Make this page red"
  },
  "manifest_version": 2
}
