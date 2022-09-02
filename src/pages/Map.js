import { useEffect, useMemo, useState } from 'react'
import { TileLayer, Marker, useMapEvent } from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import LocationFinder from 'components/map/LocationFinder'
import 'leaflet-easybutton/src/easy-button.js'
import 'leaflet-easybutton/src/easy-button.css'
import 'font-awesome/css/font-awesome.min.css'

const Map = () => {
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [active, setActive] = useState('start')
  const eventHandlers = useMemo(
    () => ({
      dragend(e) {
        if (active === 'start') {
          setStart(e.target._latlng)
        }
      },
    }),
    []
  )

  const map = useMapEvent({
    click(e) {
      if (active === 'start') {
        setStart(e.latlng)
      } else if (active === 'end') {
        setEnd(e.latlng)
      }
    },

    // dragend(e) {
    //   console.log('mapCenter', e.target.getCenter())
    //   console.log('map bounds', e.target.getBounds())
    // },

    locationfound(e) {
      map.flyTo(e.latlng, 17)
    },
  })

  const updatedMarker = (e) => {
    console.log(e)
  }

  useEffect(() => {
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    })

    L.Marker.prototype.options.icon = DefaultIcon

    const locateButton = L.easyButton('fa-map-marker', () => {
      map.locate()
    }).addTo(map)
  }, [])

  return (
    <>
      {console.log(start)}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {start && (
        <Marker
          position={start}
          draggable={true}
          eventHandlers={eventHandlers}
        />
      )}
      {end && <Marker position={end} draggable={true} />}
    </>
  )
}

export default Map
