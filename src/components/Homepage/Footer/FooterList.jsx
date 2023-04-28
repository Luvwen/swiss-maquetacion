import { Heading, Stack, Text } from '@chakra-ui/react';

export const FooterList = ({ children, sectionList }) => {
    return (
        <Stack spacing={6}>
            <Heading as='h5' fontSize='16px' fontWeight='300'>
                {children}
            </Heading>
            <Stack spacing={2}>
                {sectionList?.map((section, idx) => (
                    <Text key={idx}>{section}</Text>
                ))}
            </Stack>
        </Stack>
    );
};
