import { useContext, useEffect, useState } from 'react'
import 'styles/mapDropdown.scss'
import { ReactComponent as SearchIcon } from 'assets/icons/icons8-search-30.svg'
import UserContext from 'contexts/UserContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const MapDropDown = ({
  selectType,
  setSelectType,
  start,
  end,
  vehicle,
  setVehicle,
}) => {
  const { userData } = useContext(UserContext)
  const [search, setSearch] = useState('')
  const [dropdownItems, setDropdownItems] = useState([])

  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  const selectHandler = (e) => {
    setVehicle({
      id: e.target.getAttribute('data-id'),
      name: e.target.innerText,
    })

    setSearch(e.target.innerText)

    setDropdownItems([])
  }

  const isEverytingSet = () => {
    if (start && end && vehicle?.id) {
      return false
    }

    return true
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const fetcher = async () => {
      const id = toast.loading('لطفا منتظر بمانید...')

      try {
        const dataToSend = JSON.stringify({
          userToken: '7f5a46e2',
          vehicleUserTypeId: 0,
          source: 'adsf',
          destination: 'asdf',
        })

        const res = await axios.post(
          'https://exam.pishgamanasia.com/webapi/Request/SendRequest',
          dataToSend,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const data = await res.data

        toast.update(id, {
          ...toastConfig,
          render: data.message,
          type: 'success',
          isLoading: false,
        })
      } catch (error) {
        toast.update(id, {
          ...toastConfig,
          render: 'مشکلی بوجود آمده!',
          type: 'error',
          isLoading: false,
        })
        toast.error()
      }
    }

    if (!start || !end || !vehicle?.id) {
      toast.error('لطفا همه گزینه های لازم را پر کنید')
    } else {
      fetcher()
    }
  }

  useEffect(() => {
    const abortController = new window.AbortController()
    const signal = abortController.signal

    if (search.length > 2 && !vehicle) {
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
      vehicle && setVehicle(null)
    }
  }, [search])

  return (
    <form className='mapDropdown' onSubmit={submitHandler}>
      <div className='mapDropdown__locations'>
        <div
          className={`mapDropdown__locations_item ${
            selectType === 'start' ? 'active' : ''
          }`}
          onClick={() => setSelectType('start')}>
          <span>مبدا: </span>
          {start && (
            <>
              <span>{start.lat} , </span>
              <span>{start.lng}</span>
            </>
          )}
        </div>
        <div
          className={`mapDropdown__locations_item ${
            selectType === 'end' ? 'active' : ''
          }`}
          onClick={() => setSelectType('end')}>
          <span>مقصد: </span>
          {end && (
            <>
              <span>{end.lat} , </span>
              <span>{end.lng}</span>
            </>
          )}
        </div>
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

      <button disabled={isEverytingSet()} className='mapDropdown__submit'>
        ثبت درخواست
      </button>
    </form>
  )
}

export default MapDropDown
