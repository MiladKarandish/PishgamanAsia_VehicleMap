import { useEffect, useMemo, useState } from 'react'
import { TileLayer, Marker, useMapEvent } from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet-easybutton/src/easy-button.js'
import 'leaflet-easybutton/src/easy-button.css'
import 'font-awesome/css/font-awesome.min.css'

const Map = ({ selectType, start, setStart, end, setEnd }) => {
  const startDragHandler = useMemo(
    () => ({
      dragend(e) {
        setStart(e.target._latlng)
      },
    }),
    []
  )
  const endDragHandler = useMemo(
    () => ({
      dragend(e) {
        setEnd(e.target._latlng)
      },
    }),
    []
  )

  const map = useMapEvent({
    click(e) {
      if (selectType === 'start') {
        setStart(e.latlng)
      } else if (selectType === 'end') {
        setEnd(e.latlng)
      }
    },

    locationfound(e) {
      map.flyTo(e.latlng, 17)
    },
  })

  useEffect(() => {
    let DefaultIcon = L.icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      shadowUrl: iconShadow,
    })

    L.Marker.prototype.options.icon = DefaultIcon
  }, [selectType])

  useEffect(() => {
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    })

    L.Marker.prototype.options.icon = DefaultIcon

    L.easyButton('fa-map-marker', () => {
      map.locate()
    }).addTo(map)
  }, [])

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {start && (
        <Marker
          position={start}
          draggable={true}
          eventHandlers={startDragHandler}
        />
      )}
      {end && (
        <Marker
          position={end}
          draggable={true}
          eventHandlers={endDragHandler}
        />
      )}
    </>
  )
}

export default Map
