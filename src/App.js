import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme.js';
import Home from './components/Home/Home.jsx';

function App() {
    return ( <
        div >
        <
        ThemeProvider theme = { darkTheme } >

        <
        CssBaseline / >
        <
        Navbar / >
        <
        Home / >

        <
        /ThemeProvider>


        <
        /div>
    );
}

export default App;