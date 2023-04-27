import { StarIcon } from '@chakra-ui/icons';
import { Image, Stack, Text } from '@chakra-ui/react';

export const ImageProduct = () => {
    return (
        <Stack height='160px' pl='25px' spacing={1} width='271px'>
            <Image border='1px solid #606060' height='110px' width='271px' />
            <Stack alignItems='center' direction='row'>
                <Text minWidth='138px'>PRODUCT NAME</Text>
                <Stack
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
            <Text>$300</Text>
        </Stack>
    );
};
