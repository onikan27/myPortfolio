import { Box, Center, Image } from '@chakra-ui/react'
import { NextPage } from 'next'
import Title from 'src/components/atoms/Title'
import UpdateDay from 'src/components/atoms/UpdateDay'
import MainLayout from 'src/components/layout/MainLayout'

const about: NextPage = () => {
  return (
    <>
      <Box w="100%">
        <MainLayout>
          <Center mb="64px">
            <Image src="/myprofile.svg" w="440px" h="280px" />
          </Center>
          <Title>About Me</Title>
          <UpdateDay>2021/05/01</UpdateDay>
        </MainLayout>
      </Box>
    </>
  )
}

export default about
