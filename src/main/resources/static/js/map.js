// THE-PLAN HTML JAVASCRIPT
// SENTIMANTAL ITEMS CHECKLIST
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// THE-PLAN HTML JAVASCRIPT
// MAPBOX JAVASCRIPT
mapboxgl.accessToken = mapboxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-95.2839, 38.9075],
    zoom: 4,
    preserveDrawingBuffer: true
});

map.addControl(new mapboxgl.Directions());

var directions = new mapboxgl.Directions({
    unit: 'metric', // Use the metric system to display distances.
    profile: 'driving', // Set the initial profile to driving.
    container: 'directions', // Specify an element thats not the map container.
    proximity: [-79.45, 43.65] // Give search results closer to these coordinates higher priority.
});


map.on('load', function() {
    directions.setOrigin('Toronto, Ontario'); // On load, set the origin to "Toronto, Ontario".
    directions.setDestination('Montreal, Quebec'); // On load, set the destination to "Montreal, Quebec".
});

map.scrollZoom.disable();

// map.addControl(
//     new MapboxDirections({
//         accessToken: mapboxgl.accessToken
//     }),
//     'top-left'
// );

// NAVIGATION BUTTONS
const btn1 = function () {
    map.setZoom(19);
};
document.getElementById("btn1").addEventListener("click", btn1);

const btn2 = function () {
    map.setZoom(12);
};
document.getElementById("btn2").addEventListener("click", btn2);

const btn3 = function () {
    map.setZoom(9);
};
document.getElementById("btn3").addEventListener("click", btn3);

$('#downloadLink').click(function() {
    var img = map.getCanvas().toDataURL('image/png')
    this.href = img
})