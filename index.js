const map = L.map('map').setView([55.604290, 26.431855], 100);

const osm =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

const myIcon = L.icon({
  iconUrl: './img/loc_icon1.png',
  iconSize: [40,55]
})
var lc = L.control.locate()



// const myFirstMarker = L.marker([55.604290, 26.431855], {icon: myIcon})

osm.addTo(map)
lc.addTo(map)
lc.start()
// myFirstMarker.addTo(map)

// let marker = undefined
// let circle = undefined



  // setTimeout(() => {
  //   lc.stop()
  // }, [8000])

  // setInterval(() => {
  //   lc.stop()
  //   lc.start()
  // }, 1000)

// const getPosHandler = (pos) => {
//   const lat = pos.coords.latitude;
//   const long = pos.coords.longitude;
//   const accuracy = pos.coords.accuracy;
  
//   if (!!marker) {
//     map.removeLayer(marker)
//   }
//   if(circle) {
//     map.removeLayer(circle)
//   }
  
//   marker = L.marker([lat, long], {icon: myIcon})
//   circle = L.circle([lat, long], {radius: accuracy})

//   const featureGroup = L.featureGroup([marker, circle]).addTo(map)
//   // map.fitBounds(featureGroup.getBounds())
// }

// if (!navigator.geolocation) {
//   console.log('There is no GEO in your Xiaomi');
// } else {
//   setInterval(() => {
//     navigator.geolocation.getCurrentPosition(getPosHandler)
//   }, 2000)
// }

