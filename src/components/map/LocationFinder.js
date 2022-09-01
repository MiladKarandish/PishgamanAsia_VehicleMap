import React, { useState, useEffect } from 'react'
import { Marker, useMapEvent } from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const LocationFinder = () => {
  const [position, setPosition] = useState(null)

  useEffect(() => {
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    })

    L.Marker.prototype.options.icon = DefaultIcon
  }, [])

  const map = useMapEvent({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  if (position) {
    return <Marker position={position}></Marker>
  }
}

export default LocationFinder
