import { Box, Flex, Text, Heading, Link, HStack} from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import { Linkedin, Github, FileText } from "lucide-react";

export default function header() {
    return (
        <>
            <Flex 
            bg={{ base: "white", _dark: "black" }}
            direction="row"
            justifyContent="space-between"
            padding="10px"
            >
                <Text></Text>

                <Flex direction = "column" alignItems="center"> 
                    <Heading size="5xl" font="bold" base={{color: "black"}} _dark={{ color: "white" }}>
                        Xuan Thanh Tran
                    </Heading>
                    <Text fontSize="xl" color="gray.500" _dark={{ color: "gray.400" }}>
                        Software Engineer
                    </Text>
                    <HStack wrap="wrap" gap="4">
                        <Link href="/"> <Linkedin /></Link>
                        <Link href="/"> <Github /></Link>
                        <Link href="/"> <FileText /></Link>
                    </HStack>
                </Flex> 

                <ColorModeButton />
            </Flex>


        </>
    )
}