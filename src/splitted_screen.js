'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Copter Show
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Интеллектуальное решение для дрон-шоу: Мы предлагаем эксклюзивное программное обеспечение и подробные инструкции для сборки дронов, позволяющие вам создавать захватывающие шоу с нуля. Наш продукт идеален для тех, кто ищет полный контроль и персонализацию своего мероприятия, обеспечивая непревзойденное зрелище с минимальными усилиями.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            onClick={()=>window.location.replace("https://cshow.adlemx.ru/docs")}>
              Начало работы
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Image'}
          objectFit={'cover'}
          src={
            "pic1.jpg"
          }
        />
      </Flex>
    </Stack>
  )
}