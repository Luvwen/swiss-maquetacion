import { SearchIcon } from '@chakra-ui/icons';
import {
    Button,
    Icon,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Stack
} from '@chakra-ui/react';

import { shopCart } from './shopCart';
import { ListItems } from './ListItems';

import logo from '../../../assets/logo.jpg';

export const Navbar = () => {
    return (
        <Stack
            as='header'
            direction={[null, null, 'row', 'row', null]}
            justifyContent={[null, null, 'space-evenly', 'space-evenly', null]}
            mt={[null, null, '15px', '10px', null]}
        >
            <Stack
                alignItems={[null, null, 'center', 'center', null]}
                as='nav'
                direction={[null, null, 'row', 'row', null]}
                justifyContent={[
                    null,
                    null,
                    'space-around',
                    'space-evenly',
                    null
                ]}
                spacing={[null, null, '6', '12', null]}
            >
                <Image
                    height={[null, null, '20px', '25px', null]}
                    src={logo}
                    width={[null, null, '20px', '25px', null]}
                />
                <InputGroup size={[null, null, 'sm', 'sm']}>
                    <InputLeftElement
                        children={<SearchIcon color='primary' />} //eslint-disable-line
                        display={[null, null, 'block', null]}
                        p={[null, null, '2px 7px', null]}
                        pointerEvents='none'
                    />
                    <Input
                        height='30px'
                        placeholder='Search...'
                        style={{ paddingLeft: '25px' }}
                        width={[null, null, '200px', '299px', '299px']}
                    />
                </InputGroup>
            </Stack>
            <Stack direction='row' spacing={[null, null, '14', '6']}>
                <ListItems />
                <Button
                    background='primary'
                    color='white'
                    fontWeight='400'
                    height={'30px'}
                    leftIcon={<Icon as={shopCart} />}
                    width={[null, null, '100px', '109px']}
                >
                    Your Cart
                </Button>
            </Stack>
        </Stack>
    );
};
