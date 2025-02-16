import Image from "next/image";
import styles from "./page.module.css";
import { Box, Text } from "@chakra-ui/react";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
    <Box bg={{ base: "white", _dark: "black" }}>
      <Header />
    </Box>
    
    </>
  );
}
