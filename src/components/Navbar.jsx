import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import {
    Button,
    Divider,
    Input,
    InputGroup,
    InputLeftElement,
    ListItem,
    Stack,
    UnorderedList
} from '@chakra-ui/react';

export const Navbar = () => {
    return (
        <Stack
            as='header'
            direction={'row'}
            justifyContent='space-evenly'
            mt='10px'
        >
            <Stack
                as='nav'
                direction='row'
                justifyContent={'space-evenly'}
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
                <Stack
                    alignItems='center'
                    as={UnorderedList}
                    direction='row'
                    height='23px'
                    justifyContent='space-between'
                    listStyleType={'none'}
                    mt='3px'
                    width='388px'
                >
                    <ListItem>Home</ListItem>
                    <Divider
                        borderColor='#606060'
                        borderWidth='1px'
                        height='15px'
                        opacity='0.2'
                        orientation='vertical'
                    />
                    <ListItem>About</ListItem>
                    <Divider
                        borderColor='#606060'
                        borderWidth='1px'
                        height='15px'
                        opacity='0.2'
                        orientation='vertical'
                    />
                    <ListItem>Shop</ListItem>
                    <Divider
                        borderColor='#606060'
                        borderWidth='1px'
                        height='15px'
                        opacity='0.2'
                        orientation='vertical'
                    />
                    <ListItem>Help</ListItem>
                </Stack>
                <Button
                    background='#606060'
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
