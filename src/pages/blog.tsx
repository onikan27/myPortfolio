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
              title="【Git-Flow+PR】プロジェクトをGit-Flowに移行してみた。"
              url="https://zenn.dev/akino/articles/1dcecd60009dbb"
              platform="zenn"
              release_date="2021.03.17"
            />
            <Article
              title="Git,Githubを0からまとめてみた"
              url="https://zenn.dev/akino/articles/2fef95b72f508a"
              platform="zenn"
              release_date="2021.05.07"
            />
            <Article
              title="Basic Terminal Usage"
              url="https://zenn.dev/akino/articles/e3114695d022fc"
              platform="zenn"
              release_date="2021.05.09"
            />
            <Article
              title="ライセンスについて軽くまとめてみた"
              url="https://zenn.dev/akino/articles/a2d1959f4ef394"
              platform="zenn"
              release_date="2021.05.10"
            />
            <Article
              title="セマンティック・バージョニングのお話"
              url="https://zenn.dev/akino/articles/cd4bcb344c6e74"
              platform="zenn"
              release_date="2021.05.11"
            />
            <Article
              title="デザインパターンについて少しまとめてみた"
              url="https://zenn.dev/akino/articles/82b7503cd969fc"
              platform="zenn"
              release_date="2021.05.12"
            />
            <Article
              title="Docker周りの用語解説と通信の流れ"
              url="https://zenn.dev/akino/articles/05895f750b40d8"
              platform="zenn"
              release_date="2021.05.20"
            />
            {/* <Article title="" url="" platform="zenn" release_date=""/> */}
          </Flex>
        </MainLayout>
      </Box>
    </>
  )
}

export default career
