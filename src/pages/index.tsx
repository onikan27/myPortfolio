import { Box, Center, Flex, Image, Link } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Head } from 'next/document'
import Text from 'src/components/atoms/Text'
import TextHeader from 'src/components/atoms/TextHeader'
import Title from 'src/components/atoms/Title'
import UpdateDay from 'src/components/atoms/UpdateDay'
import MainLayout from 'src/components/layout/MainLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <title>Portfolio-Onikan</title>
        <meta property="og:title" content="Portfolio-Onikan" />
        <meta property="og:description" content="Akino's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onikan.com/" />
        <meta
          property="og:image"
          content="https://onikan-portfolio.s3-ap-northeast-1.amazonaws.com/portfolio.png"
        />
        <meta
          name="twitter:url"
          content="https://onikan-portfolio.s3-ap-northeast-1.amazonaws.com/portfolio.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content="Portfolio-Onikan" />
        <meta name="twitter:site" content="@1027_onikan" />
        <meta name="twitter:title" content="Portfolio-Onikan" />
        <meta name="twitter:description" content="I'm Akino" />
        <meta name="twitter:image" content="/portfolio.png" />
      </Head>
      <Box w="100%">
        <MainLayout>
          <Center mb={['32px', '64px']}>
            <Image
              src="/myprofile.svg"
              w={['300px', '440px']}
              h={['150px', '280px']}
            />
          </Center>
          <Title>About Me</Title>
          <UpdateDay>2021/05/01</UpdateDay>
          <TextHeader>基本情報</TextHeader>
          <Text>
            秋野と申します。「<b>おにかん</b>
            」と呼んでください。東京在住。SaaSスタートアップで執行役員&amp;エンジニア&amp;PMをしています。サービス開発とDevOpsが大好きです。
          </Text>
          <Text>
            <b>【学歴・職歴】</b>
          </Text>
          <li>法政大学・経済学部・現代ビジネス学科（2年間休学）</li>
          <li>ヘルスケアITベンチャー：フルタイムで学生インターン（7ヶ月間）</li>
          <li>SaaSスタートアップ：執行役員&amp;エンジニア&amp;PMを担当</li>

          <TextHeader>スキル</TextHeader>
          <Text>
            <b>【言語】</b>
          </Text>
          <Flex
            mt="24px"
            flexWrap="wrap"
            gridTemplateColumns="repeat(2,1fr)"
            gridGap="10px 6px"
          >
            <Image src="/skill/html.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/css.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/sass.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/js.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/typescript.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/ruby.svg" w="60px" h="60px" mr="15px" />
          </Flex>

          <Text>
            <b>【フレームワーク・ライブラリ】</b>
          </Text>
          <Flex mt="24px">
            <Image src="/skill/rails.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/react.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/next-js.svg" w="60px" h="60px" mr="20px" />
          </Flex>

          <Text>
            <b>【インフラ・その他】</b>
          </Text>
          <Flex mt="24px">
            <Image src="/skill/docker.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/github-icon.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/aws.svg" w="60px" h="60px" mr="20px" />
          </Flex>
          <Flex
            mt="10px"
            flexWrap="wrap"
            gridTemplateColumns="repeat(2,1fr)"
            gridGap="10px 6px"
          >
            <Image src="/skill/aws-s3.png" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws-vpc.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws-ec2.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws-rds.svg" w="60px" h="60px" mr="15px" />
            <Image
              src="/skill/aws-cloudfront.svg"
              w="60px"
              h="60px"
              mr="15px"
            />
            <Image src="/skill/aws-lamda.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws-ecr.png" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws-ecs.png" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws-route53.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws-elb.svg" w="60px" h="60px" mr="15px" />
            <Image
              src="/skill/aws-cloudwatch.svg"
              w="60px"
              h="60px"
              mr="15px"
            />
          </Flex>
          <Box mt="16px">
            <Link href="career" color="#708090">
              詳細なキャリア・スキル
            </Link>
          </Box>

          <TextHeader>SNSアカウント</TextHeader>
          <Flex mt="24px">
            <Box mr="20px">
              <Link href="https://twitter.com/1027_onikan">
                <Image src="/twitter.svg" w="50px" h="50px" />
              </Link>
            </Box>
            <Box mr="20px">
              <Link href="https://github.com/onikan27">
                <Image src="/skill/github-icon.svg" w="50px" h="50px" />
              </Link>
            </Box>
            <Box mr="20px">
              <Link href="https://zenn.dev/akino">
                <Image src="/skill/zenn.png" w="50px" h="50px" />
              </Link>
            </Box>
          </Flex>
        </MainLayout>
      </Box>
    </>
  )
}

export default Home
