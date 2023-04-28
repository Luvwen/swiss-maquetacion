import { Heading, Icon, Image, Stack } from '@chakra-ui/react';

import { copyrightIcon } from './copyrightIcon';
import logo from '../../../assets/logo.png';

export const CompanyLogo = () => {
    return (
        <Stack
            alignItems='center'
            color='primary'
            direction='row'
            margin='15px auto'
            pl={['20px', '20px', '0', '70px']}
            spacing={[6, 2, 6, 2]}
            width='75vw'
        >
            <Image
                cursor='pointer'
                height='25px'
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })
                }
                src={logo}
                width='25px'
            />
            <Heading as='h3' fontSize='1em'>
                Libremercado
            </Heading>
            <Icon as={copyrightIcon} fontSize='1.2em' />
        </Stack>
    );
};
