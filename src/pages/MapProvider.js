import Map from './Map'
import { MapContainer, Marker } from 'react-leaflet'
import MapDropDown from 'components/map/MapDropdown'
import { MapContextProvider } from 'contexts/MapContext'

const MapProvider = () => {
  return (
    <MapContextProvider>
      <MapContainer
        center={[29.591768, 52.583698]}
        zoom={13}
        scrollWheelZoom={false}>
        {<Map />}
      </MapContainer>
      <MapDropDown />
    </MapContextProvider>
  )
}

export default MapProvider
