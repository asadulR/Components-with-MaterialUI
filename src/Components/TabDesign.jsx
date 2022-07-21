import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
const TabDesign = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='my-20 flex items-center justify-center'>
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    centered
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab className='bg-red-200' label="Item One" />
                    <Tab className='bg-red-200' label="Item Two" />
                    <Tab className='bg-red-200' label="Item Three" />
                    <Tab className='bg-red-200' label="Item Four" />
                    <Tab className='bg-red-200' label="Item Five" />
                    <Tab className='bg-red-200' label="Item Six" />
                    <Tab className='bg-red-200' label="Item Seven" />
                </Tabs>
            </Box>
        </div>
    );
};

export default TabDesign;