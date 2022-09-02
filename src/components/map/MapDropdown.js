import { useContext, useEffect, useState } from 'react'
import 'styles/mapDropdown.scss'
import { ReactComponent as SearchIcon } from 'assets/icons/icons8-search-30.svg'
import UserContext from 'contexts/UserContext'

const MapDropDown = () => {
  const { userData } = useContext(UserContext)
  const [search, setSearch] = useState('')
  const [dropdownItems, setDropdownItems] = useState([])
  const [selected, setSelected] = useState(null)

  const selectHandler = (e) => {
    setSelected({
      id: e.target.getAttribute('data-id'),
      name: e.target.innerText,
    })

    setSearch(e.target.innerText)

    setDropdownItems([])
  }

  useEffect(() => {
    const abortController = new window.AbortController()
    const signal = abortController.signal

    selected && setSelected(null)

    if (search.length > 2 && !selected) {
      const fetcher = async () => {
        try {
          const res = await fetch(
            `https://exam.pishgamanasia.com/webapi/Request/GetVehicleUsers?SearchTerm=${search}&UserToken=${userData}`,
            { signal }
          )
          const data = await res.json()
          setDropdownItems([...data.data])
        } catch (error) {
          // Abort meesage will show in here
        }
      }
      fetcher()
    }

    return () => {
      if (signal && abortController.abort) {
        abortController.abort()
      }
    }
  }, [search])

  return (
    <div className='mapDropdown'>
      <div className='mapDropdown__locations'>
        <span>afds</span>
        <span>sfd</span>
      </div>

      <div className='mapDropdown__dropdown__container'>
        <ul className='mapDropdown__dropdown'>
          {dropdownItems.map((item) => (
            <li data-id={item.id} key={item.id} onClick={selectHandler}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className='mapDropdown__input'>
          <input
            type='text'
            onChange={(e) => {
              setSearch(e.target.value)
              if (e.target.value.trim() === '') setDropdownItems([])
            }}
            value={search}
            placeholder='نوع ماشین آلات'
          />
          <SearchIcon />
        </div>
      </div>

      <button className='mapDropdown__submit'>ثبت درخواست</button>
    </div>
  )
}

export default MapDropDown
