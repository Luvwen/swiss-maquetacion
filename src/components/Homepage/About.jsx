import { Heading, Stack, Text } from '@chakra-ui/react';

export const About = () => {
    return (
        <Stack
            alignItems='center'
            as='article'
            justifyContent='center'
            spacing={[5, 5, 5, 0]}
            width='100vw'
        >
            <Heading color='primary' fontWeight='400'>
                ¡Libremercado!
            </Heading>
            <Text
                color='primary'
                fontSize='16px'
                maxWidth={['300px', '400px', '600px', '800px']}
                textAlign='center'
                width='800px'
            >
                Somos líderes en el mercado electrónico donde mas de 38 años de
                experiencia nos avalan. Vení y probá la magía de conseguir lo
                que mas querés!
            </Text>
        </Stack>
    );
};
