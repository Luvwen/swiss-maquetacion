import { StarIcon } from '@chakra-ui/icons';
import { Image, Stack, Text } from '@chakra-ui/react';
import { ImageProduct } from './ImageProduct';

export const ImagesGroup = () => {
    return (
        <Stack
            color='text'
            direction={['column', 'row', 'column', 'row']}
            justifyContent={['center']}
            minHeight={['800px', '800px', '800px', '400px']}
            spacing={[12]}
        >
            <Stack alignItems={['center', 'center', 'center', 'flex-start']}>
                <Image
                    _hover={{
                        padding: '10px',
                        transition: '0.7s'
                    }}
                    borderRadius='35px'
                    cursor='pointer'
                    height={['250px', '200px', '300px', '400px']}
                    padding='25px'
                    src='https://i.blogs.es/885597/ps5apfinal/450_1000.jpg'
                    width={['250px', '175px', '350px', '350px']}
                />
                <Stack
                    alignItems='center'
                    direction='row'
                    justifyContent={[
                        'space-evenly',
                        'space-evenly',
                        'space-around',
                        'space-around'
                    ]}
                    width={['75%', '100%', '50%', '100%']}
                >
                    <Text>Play Station 5</Text>
                    <Stack color='primary' direction='row'>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Stack>
                </Stack>
                <Text
                    color='primary'
                    pl={['10px', 0, '38px', '32px']}
                    width={['70%', '100%', '50%', '100%']}
                >
                    $799
                </Text>
            </Stack>
            <Stack
                direction='row'
                flexWrap='wrap'
                gap={[10, 0, 10, 0]}
                justifyContent={[
                    'center',
                    'flex-start',
                    'space-evenly',
                    'flex-start'
                ]}
                spacing={0}
                width={['100%', '100%', '100%', '597px']}
            >
                <ImageProduct
                    name='Nintendo Switch'
                    price='$300'
                    url='https://http2.mlstatic.com/D_NQ_NP_2X_827500-MLA40176358181_122019-F.webp'
                />
                <ImageProduct
                    name='Playstation PsP'
                    price='$120'
                    url='https://upload.wikimedia.org/wikipedia/commons/5/5d/Sony-PSP-1000-Body.png'
                />
                <ImageProduct
                    name='Playstation Vita'
                    price='$200'
                    url='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/PlayStation_Vita_illustration.svg/1200px-PlayStation_Vita_illustration.svg.png'
                />
                <ImageProduct
                    name='Steam Deck'
                    price='$500'
                    url='https://gorilagames.com/img/Public/1019-producto-steam-deck-3-3726.jpg'
                />
            </Stack>
        </Stack>
    );
};
