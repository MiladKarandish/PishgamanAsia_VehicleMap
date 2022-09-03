import { useState } from 'react'
import { MapContainer } from 'react-leaflet'
import MapDropDown from 'components/map/MapDropdown'
import { MapContextProvider } from 'contexts/MapContext'
import Map from './Map'

const MapProvider = () => {
  const [selectType, setSelectType] = useState('start')
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [vehicle, setVehicle] = useState(null)

  return (
    <MapContextProvider>
      <MapContainer
        center={[29.591768, 52.583698]}
        zoom={13}
        scrollWheelZoom={false}>
        {
          <Map
            selectType={selectType}
            start={start}
            setStart={setStart}
            end={end}
            setEnd={setEnd}
          />
        }
      </MapContainer>
      <MapDropDown
        setSelectType={setSelectType}
        selectType={selectType}
        start={start}
        end={end}
        vehicle={vehicle}
        setVehicle={setVehicle}
      />
    </MapContextProvider>
  )
}

export default MapProvider
