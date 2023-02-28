import {useMediaQuery} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {useAppSelector} from '../../app/hooks';
import {selectMenuColor} from '../../features/menu/menuSlice';
import Account from './Account/Account';
import Basket from './Basket/Basket';
import Currency from './Currency/Currency';
import Language from './Language/Language';
import DrawerMenu from './MainMenu/DrawerMenu/DrawerMenu';
import MainMenu from './MainMenu/MainMenu';

interface IHeader {
    // headerColor: string;
}

const Header: React.FC<IHeader> = () => {
    const laptop = useMediaQuery('(max-width:1750px)');
    const tablet = useMediaQuery('(max-width:1024px)');
    const menuColor = useAppSelector(selectMenuColor);
    return (
        <Box
            sx={{
                zIndex: 10,
                position: 'relative',
                backgroundColor: menuColor,
                transition: 'background 2s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            }}
        >
            <Box
                sx={{
                    bgcolor: '#fff',
                    height: '100px',
                }}
            >
                firstHeader
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    height: laptop ? '121px' : '100%',
                }}
            >
                <Box>{tablet ? <DrawerMenu/> : <MainMenu/>}</Box>

                <Box
                    sx={{
                        position: 'absolute',
                        right: laptop ? '55px' : '3vw',
                        height: '70px',
                        top: laptop ? '50px' : '0px',

                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '16px',
                        bgcolor: 'transparent',


                        // zIndex: 0,
                    }}
                >
                    <Language/>
                    <Currency/>
                    <Account/>
                    <Basket/>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
