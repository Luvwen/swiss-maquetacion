import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Carrousel } from './Carrousel';

export const Featured = () => {
    const [slide, setSlide] = useState(true);

    const nextSlide = () => {
        setSlide(!slide);
    };

    return (
        <Stack alignItems='center' mt='50px' spacing={6}>
            <Heading color='primary'>Featured Products</Heading>
            <Stack
                alignItems='center'
                direction='row'
                spacing={6}
                width={['auto', 'auto', '500px', '500px']}
            >
                <ArrowLeftIcon
                    color='primary'
                    cursor='pointer'
                    onClick={nextSlide}
                />
                <Carrousel slide={slide} />
                <ArrowRightIcon
                    color='primary'
                    cursor='pointer'
                    onClick={nextSlide}
                />
            </Stack>
        </Stack>
    );
};
