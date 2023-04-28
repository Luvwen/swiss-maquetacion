import { Divider, Image, Stack, Text } from '@chakra-ui/react';
import { FooterMapList } from './FooterMapList';

import logo from '../../../assets/logo.jpg';

export const Footer = () => {
    return (
        <Stack
            alignItems='center'
            as='footer'
            color='primary'
            direction={['column', 'column', 'column', 'row']}
            justifyContent='space-around'
            margin='0 auto'
            spacing={[12, 12, 12, 0]}
            width='75vw'
        >
            <Stack
                alignItems={['center', 'center', 'center', 'flex-start']}
                direction={['row', 'row', 'row', 'column']}
                justifyContent={[
                    'space-evenly',
                    'space-evenly',
                    'space-between',
                    'flex-start'
                ]}
                width={['100%', '100%', '70%', '15%']}
            >
                <Image height='65px' src={logo} width='65px' />
                <Divider
                    border='1px solid primary'
                    display={['none', 'none', 'none', 'block']}
                    orientation='horizontal'
                    width='100px'
                />
                <Text width='250px'>
                    1717 Harrison St, San Francisco, CA 94103, USA
                </Text>
            </Stack>
            <FooterMapList />
        </Stack>
    );
};
