import { Divider, Image, Stack, Text } from '@chakra-ui/react';
import { FooterMapList } from './FooterMapList';

import logo from '../../../assets/logo.png';

export const Footer = () => {
    return (
        <Stack
            alignItems='center'
            as='footer'
            color='text'
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
                    'space-between',
                    'space-between',
                    'space-between',
                    'flex-start'
                ]}
                spacing={[12, 0, 0, 3]}
                width={['100%', '100%', '70%', '15%']}
            >
                <Image
                    cursor='pointer'
                    height='65px'
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }
                    src={logo}
                    width='65px'
                />
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
