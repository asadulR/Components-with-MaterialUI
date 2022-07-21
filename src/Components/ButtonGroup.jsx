import { Button, ButtonGroup, Divider} from '@mui/material';
import React from 'react';

const ButtonGrou = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button size="small" className='text-red-500'>One</Button>
                    <Button>Two</Button>
                    <Button size="large" variant="outline">Three</Button>
                </ButtonGroup>
            </div>
            <Divider className='mt-20'/>

        </div>
    );
};

export default ButtonGrou;