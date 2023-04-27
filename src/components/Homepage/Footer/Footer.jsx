import { Divider, Image, Stack, Text } from '@chakra-ui/react';
import { FooterMapList } from './FooterMapList';

export const Footer = () => {
    return (
        <Stack
            alignItems='center'
            as='footer'
            color='primary'
            direction='row'
            justifyContent='space-around'
            margin='0 auto'
            width='75vw'
        >
            <Stack>
                <Image border='1px solid primary' height='65px' width='110px' />
                <Divider
                    border='1px solid primary'
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
