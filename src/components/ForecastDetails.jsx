import { useSelector } from 'react-redux'

const ForecastDetails = () => {

    const { forecast, error } = useSelector(state => state.weatherDetails);

    if (error) return <p className='text-red-500'>{error}</p>
    if (!forecast) return null;

    return (
        <div className="card bg-base-100 shadow-xl w-full">
            <div className="card-body">
                <h2 className="card-title text-2xl justify-center mb-4">4 Days Forecast</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {forecast.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center bg-base-200 p-4 rounded-lg hover:bg-base-300 transition-colors">
                                <span className="font-semibold text-sm opacity-70">
                                    {new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: 'short', hour: '2-digit', minute: '2-digit' })}
                                </span>
                                <span className="text-xl font-bold my-1">
                                    {(item.main.temp - 273).toFixed(1)}°C
                                </span>
                                <span className="capitalize text-sm text-center">
                                    {item.weather && item.weather[0] ? item.weather[0].description : ''}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ForecastDetails