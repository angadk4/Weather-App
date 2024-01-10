# Weather App

This Weather App is a simple, user-friendly application built using React, JavaScript, HTML, and CSS. It leverages geography and weather APIs to provide current and hourly weather forecasts for cities around the world.

## Features

- **City Search**: Utilizes an asynchronous pagination search bar to find cities. This feature is powered by a geography API.
- **Weather Information**: Once a city is selected, the app makes two separate API calls to a weather API using the latitude and longitude of the city. One call fetches the current weather, and the other retrieves the hourly forecast.
- **Responsive UI**: The weather information is displayed using a card layout and accordions for an organized and interactive user experience.

## How It Works

1. **City Search**: The app uses the `AsyncPaginate` component from `react-select-async-paginate` to handle city searches. The search queries are sent to a geography API, and the results are displayed in a dropdown menu.
   
2. **Fetching Weather Data**: Upon selecting a city, the app extracts the latitude and longitude from the search result and uses them to make calls to the weather API. Two separate calls are made:
   - One for the current weather data.
   - Another for the hourly weather forecast.

3. **Displaying the Data**: The current weather data is displayed in a card format, showing key details like temperature, weather conditions, and more. The hourly forecast is shown using accordions, providing a detailed view for the next few hours.

## Installation and Setup

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Run the application:

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Geography API for city search
- Weather API for fetching weather data

## Contributing

Contributions to improve the app are welcome. For major changes, please open an issue first to discuss what you would like to change.
