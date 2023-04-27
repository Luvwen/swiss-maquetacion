import { Divider, Image, Stack, Text } from '@chakra-ui/react';
import { FooterList } from './FooterList';

export const Footer = () => {
    return (
        <Stack
            alignItems='center'
            as='footer'
            color='#606060'
            direction='row'
            justifyContent='space-around'
            margin='0 auto'
            width='75vw'
        >
            <Stack>
                <Image border='1px solid #606060' height='65px' width='110px' />
                <Divider
                    border='1px solid #606060'
                    orientation='horizontal'
                    width='100px'
                />
                <Text width='250px'>
                    1717 Harrison St, San Francisco, CA 94103, USA
                </Text>
            </Stack>
            <Stack
                as='article'
                direction='row'
                justifyContent='space-evenly'
                spacing={12}
                width='600px'
            >
                <FooterList sectionList={['Home', 'About', 'Shop', 'Help']}>
                    MAIN MENU
                </FooterList>
                <FooterList sectionList={['The Company', 'Careers', 'Press']}>
                    COMPANY
                </FooterList>
                <FooterList
                    sectionList={['The Team', 'Our History', 'Brand Motto']}
                >
                    DISCOVER
                </FooterList>
                <FooterList sectionList={['Facebook', 'Twitter', 'Instagram']}>
                    FIND US ON
                </FooterList>
            </Stack>
        </Stack>
    );
};
