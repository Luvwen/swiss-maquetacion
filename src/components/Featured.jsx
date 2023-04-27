import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Heading, Image, Stack } from '@chakra-ui/react';

export const Featured = () => {
    return (
        <Stack alignItems='center' mt='50px' spacing={6}>
            <Heading color='#606060'>Featured Products</Heading>
            <Stack
                alignItems='center'
                direction='row'
                spacing={6}
                width='975px'
            >
                <ArrowLeftIcon />
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    width='923px'
                >
                    <Image
                        border='1px solid #606060'
                        height='259px'
                        width='436px'
                    />
                    <Image
                        border='1px solid #606060'
                        height='259px'
                        width='436px'
                    />
                </Stack>
                <ArrowRightIcon />
            </Stack>
        </Stack>
    );
};
