import { Button, Heading, Input, Stack, Text } from '@chakra-ui/react';

export const Newsletter = () => {
    return (
        <Stack
            as='article'
            margin='0 auto'
            pl={[0, 0, 0, '90px']}
            width={['100vw', '100vw', '70vw', '70vw']}
        >
            <Heading
                color='primary'
                textAlign={['center', 'center', 'center', 'left']}
            >
                Newsletter
            </Heading>
            <Stack
                alignItems={[
                    'center',
                    'flex-start',
                    'flex-start',
                    'flex-start'
                ]}
                direction={['column', 'column', 'column', 'row']}
                justifyContent={[
                    'center',
                    'flex-start',
                    'flex-start',
                    'flex-start'
                ]}
                spacing={12}
            >
                <Text
                    color='primary'
                    maxWidth={['80%', '100%', '100%', '100%']}
                    width={['500px', '500px', '500px', '435px']}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac
                    neque.
                </Text>
                <Stack
                    alignItems={[
                        'center',
                        'flex-start',
                        'flex-start',
                        'flex-start'
                    ]}
                    direction={['column', 'column', 'row', 'row']}
                    spacing={2}
                >
                    <Input placeholder='Email Address' width={'275px'} />
                    <Button background='gray' color='white' width='145px'>
                        Subscribe
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};
