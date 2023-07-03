import React from 'react';
import {
    TouchableOpacity,
} from 'react-native'; 
import { Text, Box } from 'native-base';

type Props = {
    title : string;
    color : string;
    bgColor : string;
    h: string;
}
export function Header({title, color, bgColor, h }: Props) {
    return(
        <>
        <Box
        w='100%'
        h={h || 16}
        bg={bgColor|| "indigo.300"}
        borderBottomWidth={1}

        alignItems="center"
        >
        <Text
            color={color || "white"}
            fontSize={25}
            marginTop={35}
            fontWeight="bold"
            >
                {title}
            </Text>
        </Box>

        </>
    )

}

