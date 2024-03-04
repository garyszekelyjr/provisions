import { AppBar, Box, Button, Toolbar, Tabs, Tab } from '@mui/material';

function NavbarComponent({ tab, setTab }) {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Box marginInlineEnd='auto'>
                    <Tabs value={tab} onChange={(_, tab) => { setTab(tab); }}>
                        <Tab label='Dashboard' value='dashboard' />
                        <Tab label='Sales' value='sales' />
                        <Tab label='Orders' value='orders' />
                        <Tab label='Inventory' value='inventory' />
                        <Tab label='Customers' value='customers' />
                        <Tab label='Vendors' value='vendors' />
                        <Tab label='Settings' value='settings' />
                    </Tabs>
                </Box>
                <Button variant='contained' color='error'>Log Out</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarComponent;