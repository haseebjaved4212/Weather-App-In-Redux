import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, setCity } from '../redux/actions/weatherActions';

const Search = () => {

    const city = useSelector(state => state.weatherDetails.city)
    console.log(city)
    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch(setCity(e.target.value))
    }

    const handleSearchButton = () => {
        dispatch(fetchWeather(city))
    }

    return (
        <div className="w-full max-w-lg join shadow-lg">
            <label className="input input-bordered flex items-center gap-2 w-full join-item bg-base-100">
                <svg className="h-5 w-5 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                    type="text"
                    className="grow"
                    placeholder="Search for a city..."
                    value={city}
                    onChange={handleInput}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearchButton()}
                />
            </label>
            <button onClick={handleSearchButton} className="btn btn-primary join-item px-8">Search</button>
        </div>
    )
}

export default Search