import { useDispatch } from "react-redux"
import { useEffect } from "react"




import { fetchWeather } from "./redux/actions/weatherActions"

const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchWeather("Karachi"))
  }, [])

  // const [city, setCity] = useState("Karachi")
  return (
    <></>
  )
}

export default App