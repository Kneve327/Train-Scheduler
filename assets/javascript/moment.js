  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDSPH6SraSyymn2Qf5kCdFlS8NlSknL1-I",
    authDomain: "trainscheduler-7ca9d.firebaseapp.com",
    databaseURL: "https://trainscheduler-7ca9d.firebaseio.com",
    projectId: "trainscheduler-7ca9d",
    storageBucket: "trainscheduler-7ca9d.appspot.com",
    messagingSenderId: "171222558688"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();


//   initial values

var trainName = "";
var trainDestination = "";
var trainFrequency = 0;
var nextArrival = 00 + ":" + 00 + "";
var minsAway = 0;

database.ref().on("value", function(snapshot) {
    if (snapshot.child("trainName").exists() && snapshot.child("trainDestination").exists() && snapshot.child("trainFrequency").exists() && snapshot.child("nextArrival").exists() && snapshot.child("minsAway").exists()) {
        trainName = snapshot.val().trainName;
        trainDestination = snapshot.val().trainDestination;
        trainFrequency = parseInt(snapshot.val().trainFrequency);
        nextArrival = parseInt(snapshot.val().nextArrival);
        minsAway = parseInt(snapshot.val().minsAway);
    }
    $("#train-name").text(trainName);
    $("#destination").text(trainDestination);
    $("#frequency").text(trainFrequency);
    $("#next-arrival").text(nextArrival);
    $("#minutes-away").text(minsAway);
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
})

$("#submitButton").on("click", function(event) {
    event.preventDefault();
    // Get the input values
    trainName = $("#train-name").val().trim();
    trainDestination = $("#destination").val().trim();
    trainFrequency = parseInt($("#frequency").val().trim());
    nextArrival = parseInt($("#next-arrival").val().trim());
    minsAway = parseInt($("#minutes-away").val().trim());

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFrequency);
    console.log(nextArrival);
    console.log(minsAway);
  });