import { useEffect } from 'react'
import 'styles/mapDropdown.scss'

const MapDropDown = () => {
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://exam.pishgamanasia.com/webapi/Request/GetVehicleUsers?SearchTerm=Industrial&UserToken=7f5a46e2`
      )
      console.log(res)
      const data = await res.json()
      console.log(data)
    }
    fetcher()
  }, [])

  return (
    <div className='mapDropdown'>
      <input type='text' />
    </div>
  )
}

export default MapDropDown
