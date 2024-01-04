import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Forecast = ({ data }) => {
    const getFormattedDate = (idx) => {
        const now = new Date();
        now.setHours(now.getHours() + 3 * (idx + 1)); // Start at now + 3 hours for the first entry
        const day = weekDays[now.getDay()];
        const time = now.toLocaleTimeString([], { hour: '2-digit', hour12: false }); // Only hour in 24-hour format
        return `${day}, ${time}:00`;
    };

    return (
        <>
            <label className="title">3-hourly</label>
            <Accordion allowZeroExpanded className="acc">
                {data.list.slice(0, 16).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <label className="arrow">▼</label>
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{getFormattedDate(idx)}</label>
                                    <div className="right-group">
                                        <label className="description">{item.weather[0].description}</label>
                                        <label className="temp">{Math.round(item.main.temp)}°C</label>
                                        <label className="feels-like">Feels Like: {Math.round(item.main.feels_like)}°C</label>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPA</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like:</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;