import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchWeather } from "./redux/actions/weatherActions"
import Search from "./components/Search"

const App = () => {

const city = useSelector((state) => state.weatherDetails.city)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchWeather(city))
  }, [])
  return ( 
    <div className=" p-12 flex justify-center items-center flex-col">
    <Search/>
    </div>
  )
}

export default App