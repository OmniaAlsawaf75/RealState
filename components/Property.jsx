import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text } from '@chakra-ui/layout';
import { Avatar } from "@chakra-ui/avatar";
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';   
import millify from "millify"

import DefultImg from "../assets/images/house.jpg";


const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) =>(
    <Link href={`/property/${externalID}`} passhref ="true">
    <Flex flexWrap='wrap' w='420px' cursor='pointer'>
      <Box h="240" w="full"  overflow="hidden" pl="5">
        <Image src={coverPhoto ? coverPhoto.url : DefultImg} alt="property" width={420} height={220}/>
      </Box>
      <Box w='full' p="5"> 
        <Flex alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box color='green.400'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>EGP {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url}/>
          </Box>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize='md'>
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);
export default Property;