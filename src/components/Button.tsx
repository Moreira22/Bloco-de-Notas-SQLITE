import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';
import React from 'react';

type Props = IButtonProps & {
    title : string;
}


export function Button({title, color, bgColor, ...res }: Props){
    const nameBg = bgColor;
    return (
        <>
        <ButtonNativeBase
        w="xs"
        h={16}
        bg={bgColor}
        alignItems="center"
        borderRadius={30}
        _pressed={{
            bgColor : nameBg || "darkBlue.900",
        }}
        {...res}
        
        >
            <Text
            color={color || "white"}
            fontSize="md"
            >
                {title}
            </Text>
        </ButtonNativeBase>
        </>
    )
} 