import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div className="heading">
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <div className="bottomleft">
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label top">Current Conditions</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Feels like</span>
                            <span className="parameter-value">{parseFloat(data.main.feels_like.toFixed(1))}°C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Min Temp</span>
                            <span className="parameter-value">{parseFloat(data.main.temp_min.toFixed(1))}°C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Max Temp</span>
                            <span className="parameter-value">{parseFloat(data.main.temp_max.toFixed(1))}°C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Pressure</span>
                            <span className="parameter-value">{Math.round(data.main.pressure)} hPa</span>
                        </div>
                    </div>
                </div>
                <div className="bottomright">
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label top">Percipitation &amp; Sky</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Cloud Cover</span>
                            <span className="parameter-value">{data.clouds.all}%</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Wind</span>
                            <span className="parameter-value">{parseFloat(data.wind.speed.toFixed(1))} m/s</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Visibility</span>
                            <span className="parameter-value">{data.visibility}m</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;