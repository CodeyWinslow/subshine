var script = document.createElement("script");  // create a script DOM node
script.src = "https://apis.google.com/js/api.js";  // set its src to the provided URL
script.id = "ytapi";
script.onreadystatechange = onScriptLoaded;
script.onload = onScriptLoaded;
document.body.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

const API_KEY = "AIzaSyCXrk9vF6blCBM0zBhyW_sHdwNndt1_edQ";
const CLI_ID = "833450606035-to0rnru2dler9o7na8oh0a75pfks7st7.apps.googleusercontent.com";
const CLI_SECRET = "KK8puRVShOlprXjrAzk7fb6R";


function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey(API_KEY);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.subscriptions.list({})
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

function onScriptLoaded() {
    console.log("Attempting to get subscribers...");
    var api = document.getElementById("ytapi");
    console.log(api.src);
    if (typeof gapi == 'undefined') console.log("No gapi");
    else console.log("gapi found!");
    return;
    gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: CLI_ID});
    })
    console.log("initialized auth");

    // .then(authenticate)
    // .then(loadClient)
    // .then(execute).forEach(item => console.log(item));

    //get all the subscribers

    var subscribers;
    //document.querySelectorAll("#items a").forEach( node => console.log(node.textContent));

    /*.from().map( function (node) {
        console.log("Found " + node.textContent);
        node.textContent;
    });*/

    //subscribers.forEach(x => console.log(x));

    console.log("highlighting subscriber videos...");
    document.querySelectorAll("#dismissible").forEach(function (node) {
        node.style.border = "5px solid red";
    });

    document.body.style.border = "5px solid red";

    console.log("All done.");
}

