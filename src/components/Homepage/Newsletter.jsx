import { Button, Heading, Input, Stack, Text } from '@chakra-ui/react';

export const Newsletter = () => {
    return (
        <Stack as='article' margin='0 auto' pl='90px' width='70vw'>
            <Heading color='primary'>Newsletter</Heading>
            <Stack direction='row' spacing={12}>
                <Text color='primary' width='435px'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac
                    neque.
                </Text>
                <Stack direction='row' spacing={2}>
                    <Input placeholder='Email Address' width='275px' />
                    <Button background='gray' color='white' width='145px'>
                        Subscribe
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};
