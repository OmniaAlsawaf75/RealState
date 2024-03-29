import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Button, Text, Center} from '@chakra-ui/react';
import { title } from 'process';
import React from "react";

import Property from '../components/Property';
import {baseUrl, fetchApi} from '../utils/fetchApi' ;


export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="start" alignItems= "center" m="7">
    <Image src={imageUrl} alt={'banner'} width={700} height={300}/> 
    <Box p="5">
      <Text color="gray.500" fontSize="small" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="medium" bg="blue.300" color="white">
      <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home ({propertiesForSale, propertiesForRent}){
  return ( 
    <Box>
      <Banner 
      purpose= "RENT A HOME"
      title1="Rental Homes for"
      title2= "Everyone"
      desc1= "Explore Apartments, Villas, Homes"
      desc2= "and more"
      buttonText= "Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justifyContent='center'>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner 
      purpose= "BUY A HOME"
      title1="Find, Buy & Own Your"
      title2= "Dream Home"
      desc1= "Explore Apartments, Villas, Homes"
      desc2= "and more"
      buttonText= "Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap" justifyContent='center'>
      {propertiesForSale.map((property) => <Property property ={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
