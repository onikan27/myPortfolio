import { Box, Center, Flex, Image } from '@chakra-ui/react'
import { NextPage } from 'next'
import Title from 'src/components/atoms/Title'
import MainLayout from 'src/components/layout/MainLayout'
import Article from 'src/components/molecules/Article'

const career: NextPage = () => {
  return (
    <>
      <Box w="100%">
        <MainLayout>
          <Center mb={['32px', '64px']}>
            <Image
              src="/blog.svg"
              w={['300px', '440px']}
              h={['150px', '280px']}
            />
          </Center>
          <Title>Blog</Title>
          <Flex
            justifyContent="space-between"
            mt="36px"
            flexWrap="wrap"
            gridTemplateColumns="repeat(2,1fr)"
            gridGap="40px"
          >
            <Article
              title="【Next.js】CSR,SSG,SSR,ISRがあやふやな人へざっくり解説する"
              url="https://zenn.dev/akino/articles/78479998efef55"
              platform="zenn"
              release_date="2021.01.21"
            />
            <Article
              title="【Rails+Fargate】開発環境のDocker化+Fargateデプロイチュートリアル"
              url="https://zenn.dev/akino/books/629502485ddb14"
              platform="zenn"
              release_date="2021.05.02"
            />
            <Article
              title="【Git-Flow+PR】プロジェクトをGit-Flowに移行してみた。"
              url="https://zenn.dev/akino/articles/1dcecd60009dbb"
              platform="zenn"
              release_date="2021.03.17"
            />
            {/* <Article title="" url="" platform="zenn" release_date=""/> */}
          </Flex>
        </MainLayout>
      </Box>
    </>
  )
}

export default career
