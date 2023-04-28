import { Button, Divider, Heading, Image, Stack } from '@chakra-ui/react';

export const MainContent = () => {
    return (
        <Stack
            alignItems='center'
            as='section'
            height='500px'
            justifyContent='center'
            mt={['25px', '50px', '50px', '50px']}
            spacing={4}
            width='100vw'
        >
            <Heading as='h1' color='primary'>
                Libremercado 💻
            </Heading>
            <Divider
                border='1px solid primary'
                opacity='0.2'
                orientation='horizontal'
                width='200px'
            />
            <Stack direction='row' justifyContent='space-evenly' width='600px'>
                <Image
                    _hover={{
                        padding: '5px',
                        transition: '0.7s'
                    }}
                    borderRadius='10px'
                    cursor='pointer'
                    height='250px'
                    padding='25px'
                    src='https://images.fravega.com/f500/efbb3a2a38f64f141a84626f3bebacf3.jpg'
                    width='250px'
                />
                <Image
                    _hover={{
                        padding: '5px',
                        transition: '0.7s'
                    }}
                    borderRadius='10px'
                    cursor='pointer'
                    height='250px'
                    padding='25px'
                    src='https://images.fravega.com/f500/45c6d89d1132121af48c2a3eac156510.jpg'
                    width='250px'
                />
                <Image
                    _hover={{
                        padding: '5px',
                        transition: '0.7s'
                    }}
                    borderRadius='10px'
                    cursor='pointer'
                    height='250px'
                    padding='25px'
                    src='https://images.fravega.com/f500/73a83fe2c4a762c9ae974b499cf58406.jpg'
                    width='250px'
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
