import { createContext, useState } from 'react'

const MapContext = createContext()

export const MapContextProvider = ({ children }) => {
  const [mapData, setMapData] = useState()

  const value = { mapData, setMapData }

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export default MapContext
