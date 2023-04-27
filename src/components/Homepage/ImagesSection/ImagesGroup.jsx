import { StarIcon } from '@chakra-ui/icons';
import { Image, Stack, Text } from '@chakra-ui/react';
import { ImageProduct } from './ImageProduct';

export const ImagesGroup = () => {
    return (
        <Stack
            color='primary'
            direction='row'
            height='400px'
            justifyContent='center'
            spacing={6}
        >
            <Stack>
                <Image
                    border='1px solid primary'
                    height='303px'
                    width='273px'
                />
                <Stack
                    alignItems='center'
                    direction='row'
                    justifyContent='space-between'
                >
                    <Text>PRODUCT NAME</Text>
                    <Stack direction='row'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Stack>
                </Stack>
                <Text>$300</Text>
            </Stack>
            <Stack direction='row' flexWrap='wrap' spacing={0} width='597px'>
                <ImageProduct />
                <ImageProduct />
                <ImageProduct />
                <ImageProduct />
            </Stack>
        </Stack>
    );
};
