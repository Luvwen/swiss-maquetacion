import { Image, Stack } from '@chakra-ui/react';

export const Carrousel = ({ slide }) => {
    return (
        <Stack direction='row' justifyContent='space-around' width='923px'>
            {slide ? (
                <Image
                    _hover={{
                        padding: '10px',
                        transition: '0.7s'
                    }}
                    boxSize='350px'
                    cursor='pointer'
                    padding='25px'
                    src='https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/es_ES/7d204cd60ff1fce24cf6d11f24cd210a.png'
                />
            ) : (
                <Image
                    _hover={{
                        padding: '10px',
                        transition: '0.7s'
                    }}
                    boxSize='350px'
                    cursor='pointer'
                    display={[null, null, 'block', 'block', null]}
                    padding='25px'
                    src='https://s3-sa-east-1.amazonaws.com/saasargentina/JyNMe54QqkoWP7UGGiz6/imagen'
                />
            )}
        </Stack>
    );
};
