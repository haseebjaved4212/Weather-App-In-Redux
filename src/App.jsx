import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchWeather } from "./redux/actions/weatherActions"
import Search from "./components/Search"

const App = () => {

  // const state = useSelector((state) => state)
  // console.log(state)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchWeather("Karachi"))
  }, [])
  return ( 
    <div className=" p-10 flex justify-center items-center flex-col">
    <Search/>
    </div>
  )
}

export default App