import L from 'leaflet'
import MarkerIcon from 'assets/icons/marker.svg'

const markerIcon = new L.Icon({
  iconUrl: MarkerIcon,
  iconRetinaUrl: MarkerIcon,
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
})

export { markerIcon }
