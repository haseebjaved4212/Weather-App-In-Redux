import { useDispatch } from "react-redux"
import { useEffect } from "react"
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