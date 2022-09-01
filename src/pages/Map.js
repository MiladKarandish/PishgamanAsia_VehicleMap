import { useEffect, useState } from 'react'
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  useMapEvent,
} from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import LocationFinder from 'components/map/LocationFinder'
import 'leaflet-easybutton/src/easy-button.js'
import 'leaflet-easybutton/src/easy-button.css'
import 'font-awesome/css/font-awesome.min.css'

const Map = () => {
  const [locations, setLocations] = useState([])

  const map = useMapEvent({
    click(e) {
      console.log(e)
      setLocations((prev) => [...prev, e.latlng])
      // map.locate()
    },

    dragend: (e) => {
      console.log('mapCenter', e.target.getCenter())
      console.log('map bounds', e.target.getBounds())
    },

    locationfound(e) {
      map.flyTo(e.latlng, 17)
    },
  })

  useEffect(() => {
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    })

    L.Marker.prototype.options.icon = DefaultIcon

    const locateButton = L.easyButton('fa-map-marker', () => {
      map.locate()
    }).addTo(map)

    console.log(locateButton)
  }, [])

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {locations.map((item, index) => (
        <Marker key={index} position={item}></Marker>
      ))}
      {/* <LocationFinder /> */}
    </>
  )
}

export default Map

//  <Marker position={[51.505, -0.09]} icon={markerIcon}>
//  {/* <Popup>مبدا</Popup> */}
//  </Marker>
