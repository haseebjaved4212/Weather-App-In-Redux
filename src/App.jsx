import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchWeather } from "./redux/actions/weatherActions"
import Search from "./components/Search"
import CurrentWeather from "./components/CurrentWeather"
import ForecastDetails from "./components/ForecastDetails"
const App = () => {

  const city = useSelector((state) => state.weatherDetails.city)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchWeather(city))
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex flex-col items-center py-8 px-4 md:px-8 gap-8">

      <Search />

      <div className="flex flex-col gap-6 w-full max-w-4xl items-center">
        <CurrentWeather />
        <ForecastDetails />
      </div>

    </div>
  )
}

export default App