import Map from './Map'
import { MapContainer, Marker } from 'react-leaflet'
import MapDropDown from 'components/map/MapDropdown'

const MapProvider = () => {
  return (
    <MapContainer
      center={[29.591768, 52.583698]}
      zoom={13}
      scrollWheelZoom={true}>
      {<Map />}
      <MapDropDown />
    </MapContainer>
  )
}

export default MapProvider
