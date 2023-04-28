import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
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
            direction={['row', 'row', 'row', 'row', 'row']}
            justifyContent={[
                'space-evenly',
                'space-evenly',
                'space-evenly',
                'space-evenly',
                null
            ]}
            mt={['15px', '15px', '15px', '10px', null]}
        >
            <Stack
                alignItems={['center', 'center', 'center', 'center', 'center']}
                as='nav'
                direction={['row', 'row', 'row', 'row', 'row']}
                justifyContent={[
                    'space-around',
                    'space-around',
                    'space-around',
                    'space-evenly',
                    'space-evenly'
                ]}
                spacing={['6', '6', '6', '12', '12']}
            >
                <Image
                    height={['20px', '20px', '20px', '25px', '20px']}
                    src={logo}
                    width={['20px', '20px', '20px', '25px', null]}
                />
                <InputGroup size={['sm', 'sm', 'sm', 'sm']}>
                    <InputLeftElement
                        children={<SearchIcon color='primary' />} //eslint-disable-line
                        display={['block', 'block', 'block', 'block']}
                        p={['2px 7px', '2px 7px', '2px 7px', '2px 7px']}
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
            <Stack direction='row' spacing={['2', '2', '14', '6']}>
                <Stack display={['none', 'block', 'block', 'block', 'block']}>
                    <ListItems />
                </Stack>
                <HamburgerIcon
                    display={['block', 'none', 'none', 'none', 'none']}
                    fontSize='2em'
                />
                <Button
                    _hover={{
                        background: 'hover'
                    }}
                    background='button'
                    color='secondary'
                    display={['none', 'flex', 'flex', 'flex', 'flex']}
                    fontWeight='400'
                    height={'30px'}
                    leftIcon={<Icon as={shopCart} />}
                    width={[null, null, '100px', '109px']}
                >
                    Your Cart
                </Button>
                <Icon
                    as={shopCart}
                    display={['block', 'none', 'none', 'none', 'none']}
                    fontSize='2em'
                />
            </Stack>
        </Stack>
    );
};
