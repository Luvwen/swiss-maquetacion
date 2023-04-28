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
            direction={['row', 'row', 'row', 'row']}
            gap={[12, 0, 0, 0]}
            justifyContent='space-between'
            spacing={[0, 0, 12, 12]}
            width={['100%', '100%', '600px', '600px']}
            wrap={['wrap', 'nowrap', 'nowrap', 'nowrap']}
        >
            {footerSections.map((section, idx) => (
                <FooterList key={idx} sectionList={section[1]}>
                    {section[0]}
                </FooterList>
            ))}
        </Stack>
    );
};
