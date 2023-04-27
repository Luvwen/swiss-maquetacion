import { Heading, Stack, Text } from '@chakra-ui/react';

export const FooterList = ({ children, sectionList }) => {
    return (
        <Stack>
            <Heading as='h5' fontSize='16px' fontWeight='300'>
                {children}
            </Heading>
            {sectionList?.map((section, idx) => (
                <Text key={idx}>{section}</Text>
            ))}
        </Stack>
    );
};
