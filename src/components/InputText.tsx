import { Input as NativeBaseInput, IInputProps, FormControl} from "native-base";
import React from "react";

type Props = IInputProps &{
    errorMessage?: string | null;
   
}

export function InputText({errorMessage = null, isInvalid, ...rest}: Props){

    const invalid = !!errorMessage || isInvalid;
    return(
        <FormControl mb={4} isInvalid={invalid}>
            <NativeBaseInput
            placeholder=" "
            bgColor="primária.700"
            fontSize="md"
            marginTop={5}
            h={56}
            isInvalid={invalid} 
            borderColor="darkBlue.800"
            _focus={{
                bg: "gray.200",
                borderWidth: 1,
                borderColor: "green.500"
            }}
            _invalid={{
                borderWidth: 2,
                borderColor: "red.500"
            }}
            {...rest}
            />
            <FormControl.ErrorMessage>
            {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>

    );

}