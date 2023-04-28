import { ChatIcon } from '@chakra-ui/icons';
import { Stack, Text } from '@chakra-ui/react';

export const CompanyLogo = () => {
    return (
        <Stack
            alignItems='center'
            direction='row'
            margin='15px auto'
            pl={['20px', '20px', '0', '70px']}
            spacing={[6, 2, 6, 2]}
            width='75vw'
        >
            <ChatIcon />
            <Text>Libremercado</Text>
        </Stack>
    );
};
