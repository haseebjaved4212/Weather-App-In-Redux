import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"




import { fetchWeather } from "./redux/actions/weatherActions"

const App = () => {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchWeather("Karachi"))
  }, [])
  return (
    <></>
  )
}

export default App