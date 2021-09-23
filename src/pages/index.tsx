import { Box, Center, Flex, Image, Link } from '@chakra-ui/react'
import { NextPage } from 'next'
import Text from 'src/components/atoms/Text'
import TextHeader from 'src/components/atoms/TextHeader'
import Title from 'src/components/atoms/Title'
import UpdateDay from 'src/components/atoms/UpdateDay'
import MainLayout from 'src/components/layout/MainLayout'

const Home: NextPage = () => {
  return (
    <>
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
          <UpdateDay>2021/09/24</UpdateDay>
          <TextHeader>基本情報</TextHeader>
          <Text>
            あきの（秋野）と申します。東京在住の21歳です。SaaSスタートアップで執行役員&amp;エンジニアの開発リーダーをしています。サービス開発とDevOpsが大好きです。
          </Text>
          <Text>
            <b>【学歴・職歴】</b>
          </Text>
          <li>法政大学・経済学部・現代ビジネス学科</li>
          <li>ヘルスケアITベンチャー：Railsエンジニア</li>
          <li>
            SaaSスタートアップ：執行役員&amp;エンジニア（開発リーダー）&amp;PMを担当
            <b>（現在）</b>
          </li>

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
            <Image src="/skill/go-logo.svg" w="60px" h="60px" mr="15px" />
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
          <Flex
            mt="24px"
            flexWrap="wrap"
            gridTemplateColumns="repeat(2,1fr)"
            gridGap="10px 0"
          >
            <Image src="/skill/docker.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/github-icon.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/aws.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/gcp.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/Terraform.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/firebase.svg" w="60px" h="60px" mr="20px" />
            <Image src="/skill/vercel.svg" w="60px" h="60px" mr="20px" />
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
            <Image src="/skill/aws-sns.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws-iam.svg" w="60px" h="60px" mr="15px" />
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
