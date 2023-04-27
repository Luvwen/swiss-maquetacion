import { Box, Divider } from '@chakra-ui/react';
import { MainContent } from './MainContent';
import { Navbar } from './Navbar';
import { Featured } from './Featured';
import { Newsletter } from './Newsletter';
import { ImagesGroup } from './ImagesGroup';
import { About } from './About';
import { Footer } from './Footer';
import { CompanyLogo } from './CompanyLogo';

export const Home = () => {
    return (
        <Box>
            <Navbar />
            <MainContent />
            <Divider
                border='1px solid #606060'
                opacity='0.2'
                orientation='horizontal'
                width='100vw'
            />
            <Featured />
            <Divider
                border='1px solid #606060'
                m='50px 0'
                opacity='0.2'
                orientation='horizontal'
                width='100vw'
            />
            <Newsletter />
            <Divider
                border='1px solid #606060'
                m='50px 0'
                opacity='0.2'
                orientation='horizontal'
                width='100vw'
            />
            <ImagesGroup />
            <Divider
                border='1px solid #606060'
                m='50px 0'
                opacity='0.2'
                orientation='horizontal'
                width='100vw'
            />
            <About />
            <Divider
                border='1px solid #606060'
                m='50px 0'
                opacity='0.2'
                orientation='horizontal'
                width='100vw'
            />
            <Footer />
            <Divider
                border='1px solid #606060'
                mt='50px'
                opacity='0.2'
                orientation='horizontal'
                width='100vw'
            />
            <CompanyLogo />
        </Box>
    );
};
