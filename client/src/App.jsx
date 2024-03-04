import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import NavbarComponent from './components/Navbar.component';
import { useState } from 'react';

function App() {
    const [tab, setTab] = useState('dashboard');

    return (
        <ThemeProvider theme={createTheme({
            palette: {
                primary: { main: '#4caf50' },
                mode: 'dark'
            }
        })}>
            <CssBaseline>
                <NavbarComponent tab={tab} setTab={setTab} />
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
