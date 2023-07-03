import React from 'react';
import { Text, Box, Flex } from 'native-base';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    color: string;
    bgColor: string;
    h: string;
    w: string;
}
export function Item({ title, color, bgColor, h, w }: Props) {
    return (
        <>
        
            <Box
                w={w || "xs"}
                h={h || 16}
                bg={bgColor || "indigo.300"}
                borderRadius={15}
                borderColor="indigo.300"
                borderWidth={1}
                marginTop={2}
                marginLeft={15}
                
            >
                <Text
                    color={color || "white"}
                    fontSize={20}
                    fontWeight="bold"
                    marginTop={15}
                    left={10}
                    top={3}
                >
                    {title}
                </Text>
            </Box>

        </>
    )

}