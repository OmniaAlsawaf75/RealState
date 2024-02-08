import Head from "next/head";
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Link} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import {BsSearch} from 'react-icons/bs';
import {FiKey} from 'react-icons/fi';


const Navbar = ()=> (
    <Flex p="2" borderBottom="1px" borderColor="gray">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2">HouseHub</Link>
        </Box>
        <Spacer /> 
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="Red.400" />
                <MenuList >
                    <Link href="/" passhref ="true">
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passhref ="true">
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passhref ="true">
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passhref ="true">
                        <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default Navbar;