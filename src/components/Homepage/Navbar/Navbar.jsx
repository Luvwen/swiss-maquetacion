import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Stack
} from '@chakra-ui/react';
import { ListItems } from './ListItems';

export const Navbar = () => {
    return (
        <Stack
            as='header'
            direction='row'
            justifyContent='space-evenly'
            mt='10px'
        >
            <Stack
                as='nav'
                direction='row'
                justifyContent='space-evenly'
                spacing='12'
            >
                <StarIcon height='20px' mt='5px' width='64px' />
                <InputGroup size='sm'>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        height='30px'
                        placeholder='Search...'
                        width='299px'
                    />
                </InputGroup>
            </Stack>
            <Stack direction='row' spacing='5'>
                <ListItems />
                <Button
                    background='primary'
                    color='white'
                    fontWeight='400'
                    height={'30px'}
                    leftIcon={<SearchIcon />}
                    width='109px'
                >
                    Your Cart
                </Button>
            </Stack>
        </Stack>
    );
};
