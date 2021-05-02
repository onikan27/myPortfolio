import { Box, Center, Image } from '@chakra-ui/react'
import { NextPage } from 'next'
import Header from 'src/components/atoms/Header'
import Text from 'src/components/atoms/Text'
import Title from 'src/components/atoms/Title'
import MainLayout from 'src/components/layout/MainLayout'
import QuoteBox from 'src/components/molecules/QuoteBox'

const career: NextPage = () => {
  return (
    <>
      <Box w="100%">
        <MainLayout>
          <Center mb="64px">
            <Image src="/carrier.svg" w="440px" h="280px" />
          </Center>
          <Title>My Career</Title>
          <Header>ヘルスケアITベンチャー</Header>
          <QuoteBox>
            <p> 規模感：50人</p>
            <p> 勤務形態：アルバイト</p>
            <p> エンジニア数：20人弱</p>
          </QuoteBox>
          <Text>学生アルバイトとして</Text>
        </MainLayout>
      </Box>
    </>
  )
}

export default career
