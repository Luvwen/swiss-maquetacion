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

import logo from '../../../assets/logo.png';

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
                    height={['20px', '20px', '20px', '25px', '35px']}
                    src={logo}
                    width={['20px', '20px', '20px', '25px', '35px']}
                />
                <InputGroup size={['sm', 'sm', 'sm', 'sm']}>
                    <InputLeftElement
                        children={<SearchIcon color='input' />} //eslint-disable-line
                        display={['block', 'block', 'block', 'block']}
                        p={['2px 7px', '2px 7px', '2px 7px', '2px 7px']}
                        pointerEvents='none'
                    />
                    <Input
                        _placeholder={{ color: 'input' }}
                        color='input'
                        focusBorderColor='primary'
                        height='30px'
                        placeholder='Search something!'
                        style={{ paddingLeft: '25px' }}
                        width={[null, null, '200px', '299px', '299px']}
                    />
                </InputGroup>
            </Stack>
            <Stack
                alignItems={['center', 'flex-start', 'flex-start', 'center']}
                direction='row'
                spacing={['3', '2', '14', '6']}
            >
                <Stack display={['none', 'block', 'block', 'block', 'block']}>
                    <ListItems />
                </Stack>
                <HamburgerIcon
                    color='primary'
                    display={['block', 'none', 'none', 'none', 'none']}
                    fontSize='1.5em'
                />
                <Button
                    _hover={{
                        background: 'hover'
                    }}
                    background='primary'
                    color='secondary'
                    display={['none', 'flex', 'flex', 'flex', 'flex']}
                    fontWeight='400'
                    height={['30px', '30px', '30px', '35px']}
                    leftIcon={<Icon as={shopCart} />}
                    width={[null, null, '100px', '109px']}
                >
                    Your Cart
                </Button>
                <Icon
                    as={shopCart}
                    color='primary'
                    display={['block', 'none', 'none', 'none', 'none']}
                    fontSize='1.5em'
                />
            </Stack>
        </Stack>
    );
};
