import Head from "next/head";
import {Box} from '@chakra-ui/react'
import { Children } from "react";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



const Layout = ({children})=> (
    <>
    <div color="white">
    <Head>
        <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
        <header><Navbar/></header>
        <main>{children}</main>
        <footer><Footer/></footer>
    </Box>
    </div>
    </>
)
export default Layout;