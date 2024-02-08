import { Flex, Box, Spacer, Text } from "@chakra-ui/layout";
import {FaBed, FaBath} from 'react-icons/fa';
import { Avatar } from '@chakra-ui/avatar';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';   
import millify from "millify"

import {baseUrl, fetchApi} from '../../utils/fetchApi' ;
import ImageScrollBar from "../../components/ImageScrollBar";


const PropertyCard= ({propertyDetails:{price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos}}) => (
    <Box maxWidth="1000px" m="auto" p="4">
        {photos && <ImageScrollBar data={photos} />}
        <Box w="full" p="6">
            <Flex pt='5' alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center'>
                    <Box pr='3' color='green.400'>{isVerified && <GoVerified />}</Box>
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
            <Box mt="2">
                <Text fontSize="lg" mb="2" fontWeight="bold">
                  {title}
                </Text>
                <Text lineHeight="2" color="gray.600">{description}</Text>
            </Box>
            <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
                <Flex borderBottom="1px" borderColor="gray.100" py="3">
                    <Text>Type :</Text>
                    <Text fontWeight="bold">{type}</Text>
                </Flex>
                <Flex  borderBottom="1px" borderColor="gray.100" py="3">
                    <Text>Purpose :</Text>
                    <Text fontWeight="bold">{purpose}</Text>
                </Flex>
                {furnishingStatus && (
                    <Flex borderBottom="1px" borderColor="gray.100" py="3">
                    <Text>Furnishing Status :</Text>
                    <Text fontWeight="bold">{furnishingStatus}</Text>
                </Flex>
                )}
            </Flex>
            <Box>
                {amenities.length && <Text fontSize="xl" fontWeight="bold" mt="5">Amenities</Text>}
                <Flex flexWrap="wrap">
                    {amenities.map((item) => (
                        item.amenities.map((amenity) => (
                            <Text fontWeight="bold" color="blue.400" fontSize="m" p="2" m="1" borderRadius="5" bgColor="gray.200" key={amenity.text}>{amenity.text}</Text>
                        ))
                    ))}
                </Flex>
            </Box>
        </Box>
    </Box>
);

export default PropertyCard;

export async function getServerSideProps({params:{id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    return{
        props:{
            propertyDetails : data,
        }
    };
}
