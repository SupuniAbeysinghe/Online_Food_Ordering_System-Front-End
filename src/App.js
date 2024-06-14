import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme.js';

function App() {
    return ( <
        div >
        <
        ThemeProvider theme = { darkTheme }
        />

        <
        CssBaseline / >
        <
        Navbar / >




        <
        /div>
    );
}

export default App;