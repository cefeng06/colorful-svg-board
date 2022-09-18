import { ThemeProvider } from '@mui/private-theming';
import { DrawingPanel } from './components/DrawingPanel/drawingPanel';
import { SideBar } from './components/SideBar/sideBar';
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import './App.css';

function App() {

    const drawingMode = useSelector((state) => state.drawingMode);
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ff4400',
            },
            secondary: {
                light: '#0066ff',
                main: drawingMode.color,
                contrastText: '#ffcc00',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        },
    });

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <DrawingPanel />
                <SideBar />
            </ThemeProvider>
        </div>
    );
}

export default App;
