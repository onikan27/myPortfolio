import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import Title from 'src/components/atoms/Title'
import MainLayout from 'src/components/layout/MainLayout'

const Home: NextPage = () => {
  return (
    <>
      <Box w="100%">
        <MainLayout>
          <Title>Hello</Title>
        </MainLayout>
      </Box>
    </>
  )
}

export default Home
