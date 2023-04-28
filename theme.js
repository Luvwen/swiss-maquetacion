import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Source Sans Pro', sans-serif`, //eslint-disable-line
        body: `'Source Sans Pro', sans-serif` //eslint-disable-line
    },
    colors: {
        primary: '#F97316',
        secondary: '#FFFFFF',
        hover: '#0591AF',
        text: '#1A202C',
        input: '#718096'
    }
});

export default theme;
