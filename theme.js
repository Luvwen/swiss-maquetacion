import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Source Sans Pro', sans-serif`, //eslint-disable-line
        body: `'Source Sans Pro', sans-serif` //eslint-disable-line
    },
    colors: {
        primary: '#606060',
        secondary: '#ffffff',
        hover: '#21232a'
    }
});

export default theme;
