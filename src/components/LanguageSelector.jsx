import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const LanguageSelector = ({language,onSelect}) => {
    const languages = Object.entries(LANGUAGE_VERSIONS)

    return (
        <div className="mb-2">
            <h2 className="font-semibold text-lg text-gray-300">Language:</h2>
            <Menu isLazy>
                <MenuButton as={Button} bg="gray.800" _hover={{bg: "gray.700"}} _active={{ bg: "gray.700" }} color="gray.300">
                    {language}
                </MenuButton>
                <MenuList bg="#110c1b" borderColor="gray.700">
                    {
                        languages.map(([lang, version]) => (
                            <MenuItem 
                            onClick={() => onSelect(lang)}
                            key={lang} 
                            color={lang === language ? "blue.400" : "gray.400"}
                            bg={lang === language ? "gray.800" : "transparent"}
                            _hover={{bg: "gray.700",color:"gray.200"}}>
                                {lang}
                                &nbsp;
                                <Text as='span' 
                                color={lang === language ? "green.500" : "gray.400"}
                                 fontSize="sm">
                                    ({version})
                                </Text>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </div>
    );
};

export default LanguageSelector;
