import { Box, Divider } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { ImagesGroup } from './ImagesSection';
import { Footer } from './Footer';
import { MainContent } from './MainContent';
import { Featured } from './Featured';
import { Newsletter } from './Newsletter';
import { About } from './About';
import { CompanyLogo } from './CompanyLogo';

export const Homepage = () => {
    return (
        <Box>
            <Navbar />
            <MainContent />
            <Divider
                border='1px solid primary'
                opacity='0.5'
                orientation='horizontal'
                width='100vw'
            />
            <Featured />
            <Divider
                border='1px solid primary'
                m='50px 0'
                opacity='0.5'
                orientation='horizontal'
                width='100vw'
            />
            <Newsletter />
            <Divider
                border='1px solid primary'
                m='50px 0'
                opacity='0.5'
                orientation='horizontal'
                width='100vw'
            />
            <ImagesGroup />
            <Divider
                border='1px solid primary'
                m='50px 0'
                opacity='0.5'
                orientation='horizontal'
                width='100vw'
            />
            <About />
            <Divider
                border='1px solid primary'
                m='50px 0'
                opacity='0.5'
                orientation='horizontal'
                width='100vw'
            />
            <Footer />
            <Divider
                border='1px solid primary'
                mt='50px'
                opacity='0.5'
                orientation='horizontal'
                width='100vw'
            />
            <CompanyLogo />
        </Box>
    );
};
