import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchWeather } from "./redux/actions/weatherActions"
import Search from "./components/Search"

const App = () => {

  const state = useSelector((state) => state)
  console.log(state)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchWeather("Karachi"))
  }, [])
  return (
    <>
    <Search/>
    </>
  )
}

export default App