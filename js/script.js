var songNames = ["No guiedance","No idea","Press your Number","The less I Know the Better","Die for you","Talking to the Moon"]
var artist = ["Chris Brown","Don Toliver","TAEMIN","Tame Imapala","The Weekend","Bruno Mars"]
var time = ["4:22","2:34","4:48","3:37","4:21","3:38"]
var img = ["https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjl9_mth4fnAhUUqZ4KHSTHBk8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.chrisbrownworld.com%2Fnew-song-alert-no-guidance-ft-drake-out-now%2F&psig=AOvVaw0AnYnzDOxK8m4gh3eN2nv_&ust=1579227588775393","https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjatajGh4fnAhXYvJ4KHcUPB8oQjRx6BAgBEAQ&url=https%3A%2F%2Fsoundcloud.com%2Fdontoliver%2Fno-idea&psig=AOvVaw3BUHrMAUT2uo82Iw-o58Rx&ust=1579227640203100","https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi2gMTdh4fnAhVMj54KHQZDBtAQjRx6BAgBEAQ&url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F1T7NW3LwpJZw381bfiPPBz&psig=AOvVaw38MpzCz1eFt51JlPeKn_WI&ust=1579227688717483"]
//ended at press your number
songNames.forEach(function(song) {
 $(".songNames").append("<div>" + song + "</div>")
});
artist.forEach(function(artist) {
 $(".songNames").append("<div>" + artist + "</div>")
});
time.forEach(function(time) {
 $(".songNames").append("<div>" + time + "</div>")
});