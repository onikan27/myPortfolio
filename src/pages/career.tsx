import { Box, Center, Flex, Image } from '@chakra-ui/react'
import { NextPage } from 'next'
import Text from 'src/components/atoms/Text'
import TextHeader from 'src/components/atoms/TextHeader'
import Title from 'src/components/atoms/Title'
import UpdateDay from 'src/components/atoms/UpdateDay'
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
          <Title>My Career &amp; Skill</Title>
          <UpdateDay>2021/05/01</UpdateDay>

          <TextHeader>キャリア要約</TextHeader>
          <Text>
            プログラミング歴、1年11ヶ月。エンジニア歴11ヶ月です。法政大学を休学してプログラミングの独学を開始。ヘルスケアITベンチャーに保守改修業務を行ったのちに、
            <b>
              現在はSaaSスタートアップに共同創業者&amp;執行役員&amp;エンジニア&amp;PMとして新規事業立ち上げ
            </b>
            をしています。
          </Text>
          <TextHeader>技術スタック</TextHeader>
          <Text>
            <b>【言語】</b>
          </Text>
          <li>HTML</li>
          <li>CSS,SCSS（FLOCSS,BEM設計の経験あり）</li>
          <li>JavaScript（TypeScript）</li>
          <li>Ruby</li>

          <Flex mt="24px">
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
          <li>Ruby on Rails</li>
          <li>React</li>
          <li>Next.js</li>
          <Flex mt="24px">
            <Image src="/skill/rails.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/react.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/next-js.svg" w="60px" h="60px" mr="15px" />
          </Flex>

          <Text>
            <b>【インフラ・その他】</b>
          </Text>
          <li>Docker：開発環境,本番環境のDocker化</li>
          <li>
            <b>GithubActions</b>：CI/CDパイプライン構築
          </li>
          <li>
            <b>AWS</b>：S3, VPC, EC2, RDS, CloudFront, Lambda, ECR,
            ECS（Fargate）, Route53, ALB, ACM, CloudWatch
          </li>

          <Flex mt="24px">
            <Image src="/skill/docker.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/github-icon.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/aws.svg" w="60px" h="60px" mr="15px" />
          </Flex>
          <Flex mt="16px">
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
          </Flex>
          <Flex mt="16px">
            <Image src="/skill/aws-elb.svg" w="60px" h="60px" mr="15px" />
            <Image
              src="/skill/aws-cloudwatch.svg"
              w="60px"
              h="60px"
              mr="15px"
            />
          </Flex>

          <TextHeader>具体的な開発経験</TextHeader>
          <Text>
            <b>【インフラ・DevOps】</b>
          </Text>
          <Text>
            もっとも好きな分野がインフラ・DevOpsです。
            <b>
              自動化を積極的に行うことでセキュリティの向上、リスクの減少、人件費の削減に貢献
            </b>
            しました。また、
            <b>
              自分を含めた開発メンバーが、より質の高い仕事に集中できるように意識
            </b>
            しました。
          </Text>
          <li>ステージング環境構築</li>
          <li>デプロイ失敗時の自動ロールバック機能</li>
          <li>
            <b>GithubActionsを使ったCI/CDパイプラインの構築</b>
          </li>
          <li>S3+CloudFrontを使った静的ファイルのホスティング</li>
          <li>AWSのEC2を使ったRailsアプリケーションのインフラ構築</li>
          <li>
            <b>
              AWSのECS（Fargate）を使ったRailsアプリケーションの0からのインフラ構築
            </b>
          </li>

          <Text>
            <b>【バックエンド】</b>
          </Text>
          <Text>
            テーブル数500以上のRailsアプリケーションの保守改修系のタスクから新規開発プロジェクトの開発経験があります。最近は
            <b>新規プロジェクトの開発環境整備や基盤構築、初期段階での開発</b>
            をしています。
          </Text>
          <li>RailsAPIでの開発経験</li>
          <li>Punditを使った認可の構築</li>
          <li>コミット時にRubocopを走らせる</li>
          <li>Sendgrid+ActionMailerのメール送信構築</li>
          <li>テーブル数500以上でのRailsの保守改修作業</li>
          <li>Algoliaを使った全文検索の構築（バックエンド検索）</li>
          <li>ActiveStorage+S3による画像,動画ファイルの管理機能実装</li>
          <li>Cookie,CORS設定,HTTPS通信でのSameSite,Secureなどの設定</li>

          <Text>
            <b>【フロントエンド】</b>
          </Text>
          <Text>
            モノリシックなRails環境でのフロント開発やSPA環境でのNext.jsの開発経験があります。最近は、
            <b>Next.js+TypeScript+Stoplightでのスキーマ駆動開発</b>
            をしています。
          </Text>
          <li>ContextAPIを使った状態管理</li>
          <li>Next.js+TypeScript環境での開発経験</li>
          <li>Stoplightによるスキーマ駆動での開発</li>
          <li>FLOCSS,BEM設計でのCSS（SCSS）開発経験</li>
          <li>Algoliaを使った全文検索の構築（フロントエンド検索）</li>
          <li>CSSフレームワーク（Chakra）を使った実務での開発経験</li>

          <TextHeader>業務経歴</TextHeader>

          <Text>
            <b>【ヘルスケアITベンチャー】</b>
          </Text>

          <QuoteBox>
            <p>全体：50人</p>
            <p>エンジニア：20人弱</p>
            <p>期間：2020/07/01〜2021/01/31</p>
            <p>勤務形態：インターン（フルタイム）</p>
            <p>担当業務：Web周りの保守改修・新規機能開発</p>
            <p>
              使用技術：Ruby on Rails, JavaScript, React, HTML, CSS(SCSS,
              FLOCSS,BEM設計), Docker, CircleCI, AWS, RSpec
            </p>
          </QuoteBox>
          <Text>
            学生インターンとしてジョイン。大学を休学していたので、
            <b>週5フルタイムで勤務していました。</b>主にWeb、特にRuby on
            Railsでの保守改修系のタスクをこなしていました。レビュー文化が浸透していたので、経験が深い先輩エンジニアから質の高いコードの書き方を学ばせていただきました。
          </Text>
          <Text>
            FLOCSS,BEM設計でのデザインリニュアールや、
            <b>Railsを使った新規機能単位での開発</b>
            、RSpecによるテストコード記述、Github-Flowでの開発などの濃い経験を積ませていただきました。
          </Text>
          <Text>
            <b>【SaaSスタートアップ】</b>
          </Text>
          <QuoteBox>
            <p>全体：5人（時期によって変動あり）</p>
            <p>エンジニア：3人（時期によって変動あり）</p>
            <p>期間：2021/02/01〜現在</p>
            <p>勤務形態：正社員</p>
            <p>
              担当業務：<b>新規事業開発・PM・インフラ構築</b>
            </p>
            <p>
              使用技術：Ruby on Rails, Next.js, Docker, GithubActions, AWS,
              Vercel, ReactNative, Algolia
            </p>
          </QuoteBox>
          <Text>
            <b>共同創業者のエンジニアとしてジョイン。</b>
            フロント、バックエンド、インフラ、ネイティブアプリの新規開発をしながらPMをやっています。技術者に止まらず、
            <b>
              ビジネスサイドの議論にも積極的に参加し、サービスの質向上に勤めています。
            </b>
          </Text>
          <Text>
            インフラ側では
            <b>AWSでのECS（Fargate）を使った0からのインフラ構築、</b>
            ステージング環境の構築、GithubActionsを使ったCI/CDパイプラインの構築、デプロイ失敗時に自動ロールバック構築などを担当しました。
          </Text>
          <Text>
            バックエンドのRails側ではコミット時にRubocopを走らせるなどの基盤構築、Docker-composeを使った開発環境のDocker化、
            <b>FirebaseAuthentication+Rails+Next.js構成のGoogle認証の構築、</b>{' '}
            SendGrid+ActionMailerを使ったメール送信などの実装、ActiveStorage+S3による画像,動画ファイルの管理機能などの実装を担当しました。
          </Text>
          <Text>
            フロント側ではNext.jsの基盤構築、
            <b>Algoliaを使った全文検索の構築、</b>
            無限スクロールの開発、CSSフレームワーク（Chakra）を使った開発などを行っています。
          </Text>
        </MainLayout>
      </Box>
    </>
  )
}

export default career
