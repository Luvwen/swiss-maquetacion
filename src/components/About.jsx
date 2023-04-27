import { Heading, Stack, Text } from '@chakra-ui/react';

export const About = () => {
    return (
        <Stack
            alignItems='center'
            as='article'
            justifyContent='center'
            width='100vw'
        >
            <Heading color='#606060' fontWeight='400'>
                About Your Shop
            </Heading>
            <Text
                color='#606060'
                fontSize='16px'
                textAlign='center'
                width='800px'
            >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
            </Text>
        </Stack>
    );
};
