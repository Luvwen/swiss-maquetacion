import React from 'react';
import { Divider, ListItem, Stack, UnorderedList } from '@chakra-ui/react';

export const ListItems = () => {
    const sections = ['Home', 'About', 'Shop', 'Help'];
    return (
        <Stack
            alignItems='center'
            as={UnorderedList}
            direction='row'
            height='23px'
            justifyContent='space-between'
            listStyleType={'none'}
            mt='3px'
            width={[null, null, '250px', '388px']}
        >
            {sections.map((section, idx) => (
                <React.Fragment key={idx}>
                    <ListItem
                        _hover={{
                            background: 'hover',
                            transition: '0.8s',
                            color: 'secondary'
                        }}
                        borderRadius='10px'
                        cursor='pointer'
                        padding={[null, null, '3px 12px', '6px 25px']}
                    >
                        {section}
                    </ListItem>
                    {idx !== section.length - 1 && (
                        <Divider
                            borderColor='primary'
                            borderWidth='1px'
                            height='15px'
                            opacity='0.2'
                            orientation='vertical'
                        />
                    )}
                </React.Fragment>
            ))}
        </Stack>
    );
};
