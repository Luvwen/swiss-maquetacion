import { ChatIcon } from '@chakra-ui/icons';
import { Stack, Text } from '@chakra-ui/react';

export const CompanyLogo = () => {
    return (
        <Stack
            alignItems='center'
            direction='row'
            margin='0 auto'
            mt='15px'
            pl='70px'
            spacing={2}
            width='75vw'
        >
            <ChatIcon />
            <Text>Your Company Name</Text>
        </Stack>
    );
};
