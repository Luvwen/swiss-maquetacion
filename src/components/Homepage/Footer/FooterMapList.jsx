import { Stack } from '@chakra-ui/react';
import { FooterList } from './FooterList';

export const FooterMapList = () => {
    const footerSections = [
        ['MAIN MENU', ['Home', 'About', 'Shop', 'Help']],
        ['COMPANY', ['The Company', 'Careers', 'Press']],
        ['DISCOVER', ['The Team', 'Our History', 'Brand Motto']],
        ['FIND US ON', ['Facebook', 'Twitter', 'Instagram']]
    ];
    return (
        <Stack
            as='article'
            direction='row'
            justifyContent='space-evenly'
            spacing={12}
            width='600px'
        >
            {footerSections.map((section, idx) => (
                <FooterList key={idx} sectionList={section[1]}>
                    MAIN MENU
                </FooterList>
            ))}
        </Stack>
    );
};
