
import { useSelector } from 'react-redux'

const CurrentWeather = () => {

    const { current, loading, error } = useSelector(state => state.weatherDetails);

    if (loading) return <p className='p-10 opacity-50'>Loading.......</p>
    if (error) return <p className='text-red-500 '>{error}</p>
    if (!current) return null;

    return (
        <div className="card bg-base-100 shadow-xl w-full max-w-md">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">{current.name}</h2>
                <div className="text-5xl font-extrabold my-2">
                    {(current.main.temp - 273).toFixed(1)}°C
                </div>
                <div className="flex flex-col gap-1 text-lg opacity-80">
                    <p className="capitalize">{current.weather[0].description}</p>
                    <p>Humidity: {current.main.humidity}%</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather