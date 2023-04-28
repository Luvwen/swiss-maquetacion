import { StarIcon } from '@chakra-ui/icons';
import { Image, Stack, Text } from '@chakra-ui/react';

export const ImageProduct = ({ name, price, url }) => {
    return (
        <Stack
            cursor='pointer'
            height='150px'
            pl={[0, 0, '25px', '25px']}
            spacing={1}
            width='271px'
        >
            <Image
                _hover={{
                    padding: '10px',
                    transition: '0.7s'
                }}
                height='110px'
                padding='20px'
                src={url}
                width='271px'
            />
            <Stack alignItems='center' direction='row'>
                <Text minWidth='138px'>{name}</Text>
                <Stack
                    color='primary'
                    direction='row'
                    justifyContent='space-between'
                    maxWidth='90px'
                >
                    <StarIcon fontSize='12px' />
                    <StarIcon fontSize='12px' />
                    <StarIcon fontSize='12px' />
                    <StarIcon fontSize='12px' />
                    <StarIcon fontSize='12px' />
                </Stack>
            </Stack>
            <Text color='primary'>{price}</Text>
        </Stack>
    );
};
