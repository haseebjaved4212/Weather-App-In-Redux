# Weather App

A modern, responsive weather application built with React, Redux, and TailwindCSS. This app allows users to search for cities and view current weather conditions along with a 4-day forecast.

## Features

- **Real-time Weather**: Fetches current weather data including temperature, humidity, and conditions.
- **Forecast**: Provides a 4-day weather forecast.
- **Responsive Design**: Fully responsive UI using TailwindCSS and DaisyUI, optimized for both mobile and desktop.
- **State Management**: Robust state management using Redux and Redux Thunk for asynchronous actions.
- **Modern UI**: Clean and visually appealing interface with a gradient background and glassmorphism effects.

## Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Redux](https://redux.js.org/) & [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)

## Folder Structure

```
Weather App/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, icons)
│   ├── components/      # and Reusable UI components
│   │   ├── CurrentWeather.jsx  # Displays current weather info
│   │   ├── ForecastDetails.jsx # Displays 4-day forecast
│   │   └── Search.jsx          # Search bar component
│   ├── redux/           # Redux state management
│   │   ├── actions/     # Action creators (weatherActions.js)
│   │   ├── constants/   # Action types (weatherConstants.js)
│   │   ├── reducers/    # Reducers (weatherReducer.js, index.js)
│   │   └── store.js     # Redux store configuration
│   ├── App.jsx          # Main application component with layout
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles (Tailwind imports)
├── .gitignore           # Git ignore rules
├── eslint.config.js     # Linting configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/haseebjaved4212/weather-app.git
    cd weather-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Key**
    - Open `src/redux/actions/weatherActions.js` (or create a `.env` file if configured).
    - Replace the API key placeholder with your OpenWeatherMap API key.

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Build for production**
    ```bash
    npm run build
    ```

## Usage

1.  Enter a city name in the search bar.
2.  Press **Enter** or click the **Search** button.
3.  View the current weather details and the upcoming forecast cards.

## contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

© 2026 Haseeb Javed.


--- 
<h3 align="center">
    <img src="https://readme-typing-svg.herokuapp.com?key=1&width=400&height=40&lines=Made+with+%E2%9D%A4%EF%B8%8F+by+Haseeb+Javed" alt="Typing SVG" />
</h3>