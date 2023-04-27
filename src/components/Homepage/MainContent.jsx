import { Button, Divider, Heading, Image, Stack } from '@chakra-ui/react';

export const MainContent = () => {
    return (
        <Stack
            alignItems='center'
            as='section'
            height='500px'
            justifyContent='center'
            mt='50px'
            spacing={12}
            width='100vw'
        >
            <Heading as='h1' color='primary'>
                Tagline describing your e-shop
            </Heading>
            <Divider
                border='1px solid primary'
                opacity='0.2'
                orientation='horizontal'
                width='200px'
            />
            <Stack direction='row' justifyContent='space-between' width='586px'>
                <Image
                    border='1px solid primary'
                    height='132px'
                    width='162px'
                />
                <Image
                    border='1px solid primary'
                    height='132px'
                    width='162px'
                />
                <Image
                    border='1px solid primary'
                    height='132px'
                    width='162px'
                />
            </Stack>
            <Button
                background='primary'
                color='white'
                height='41px'
                width='182px'
            >
                Shop Now
            </Button>
        </Stack>
    );
};
