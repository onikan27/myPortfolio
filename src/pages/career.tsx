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
            <Image
              src="/carrier.svg"
              w={['300px', '440px']}
              h={['150px', '280px']}
            />
          </Center>
          <Title>My Career &amp; Skill</Title>
          <UpdateDay>2021/08/02</UpdateDay>

          <TextHeader>キャリア要約</TextHeader>
          <Text>
            法政大学を休学してヘルスケアITベンチャーでWebエンジニアとして、新規機能開発や保守改修業務を行ったのちに、
            <b>
              現在はSaaSスタートアップの執行役員とエンジニアの開発リーダーとして新規事業立ち上げ
            </b>
            をしています。
            <b>
              エンジニアとしてフロント、バックエンド、インフラ、Nativeでの技術選定から新規サービス開発
            </b>
            をしています。また、エンジニアリングだけでなく、
            <b>
              採用活動、仕様レベルでのディスカッション、壁打ちや投資家向けのピッチ経験
            </b>
            などでビジネスサイドでも貢献しています。
          </Text>

          <Text>
            常に
            <b>
              ユーザーファーストに立って考え、ビジネスサイドとエンジニアサイドの「橋」になれるように意識しています。
            </b>
          </Text>
          <TextHeader>技術スタック</TextHeader>
          <Text>
            <b>【言語】</b>
          </Text>
          <li>HTML</li>
          <li>CSS,SCSS（FLOCSS,BEM設計の経験あり）</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Ruby</li>
          <li>Golang</li>

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
          <li>Ruby on Rails</li>
          <li>React</li>
          <li>React Native</li>
          <li>Next.js</li>
          <Flex mt="24px">
            <Image src="/skill/rails.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/react.svg" w="60px" h="60px" mr="15px" />
            <Image src="/skill/next-js.svg" w="60px" h="60px" mr="15px" />
          </Flex>

          <Text>
            <b>【インフラ・その他】</b>
          </Text>
          <li>Github：コード管理</li>
          <li>Docker：開発環境,本番環境のDocker化</li>
          <li>
            <b>GithubActions</b>：CI/CDパイプライン構築
          </li>
          <li>
            <b>AWS</b>：S3｜VPC｜EC2｜RDS｜CloudFront｜Lambda｜ECR｜
            ECS（Fargate）｜Route53｜ALB｜ACM｜CloudWatch｜SNS｜AWS Chatbot|
            IAM｜Amazon Polly｜Amazon Translate｜AWS Secrets Manager｜AWS
            Systems Manager｜ElastiCache｜
          </li>
          <li>
            <b>GCP</b>：CloudStorage, Speech to Text
          </li>
          <li>
            <b>Terraform</b>：インフラのコード化
          </li>
          <li>Firebase：Authentication, Storage</li>

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

          <TextHeader>具体的な開発経験</TextHeader>
          <Text>
            <b>【インフラ・DevOps】</b>
          </Text>
          <Text>
            もっとも好きな分野がインフラ・DevOpsです。0→1のインフラ構築や、インフラのコード化や
            <b>
              自動化を積極的に行うことで高可用性、セキュリティ性の向上、リスクの減少、人件費の削減に貢献
            </b>
            しました。また、
            <b>
              自分を含めた開発メンバーが、より質の高く、コアな仕事に集中できるように意識
            </b>
            しました。
          </Text>
          <Text>
            <b>AWS</b>
          </Text>
          <li>ステージング環境構築</li>
          <li>ElastiCacheを使ったredisの導入</li>
          <li>EC2環境からECS（Fargate）への移行</li>
          <li>AWS SDKのJavaScriptやRubyを使っての開発</li>
          <li>本番環境で500エラー時にSlackに通知を飛ばす</li>
          <li>Amazon Translateを使った自動翻訳機能の開発</li>
          <li>S3+CloudFrontを使った静的ファイルのホスティング</li>
          <li>AWS Secrets Managerを使ったセキュアな環境変数管理</li>
          <li>デプロイ失敗時のSlack通知機能・自動ロールバック機能</li>
          <li>
            AmazonPolly（Text to Speech）を使った文字列の自動音声化機能の開発
          </li>
          <li>
            AWSのEC2を使ったRailsアプリケーション（APIモード）のインフラ構築
          </li>
          <li>
            <b>
              AWSのECS（Fargate）を使ったRailsアプリケーション（APIモード）の0からのインフラ構築
            </b>
          </li>

          <Text>
            <b>GCP</b>
          </Text>
          <li>Cloud Storageを使った機能開発</li>
          <li>Speech to Textを使った音声から字幕の自動作成機能の開発</li>

          <Text>
            <b>その他</b>
          </Text>
          <li>Vercel：デプロイと、その運用</li>
          <li>
            <b>GithubActions：CI/CDパイプラインの構築</b>
          </li>
          <li>
            <b>Terraform：AWSリソースのインフラコード化</b>
          </li>
          <li>Firebase Authenticationを使った認証基盤の構築</li>

          <Text>
            <b>【バックエンド】</b>
          </Text>
          <Text>
            テーブル数500以上のRailsアプリケーションの保守改修系のタスクから新規開発プロジェクトの開発経験があります。最近は
            <b>新規プロジェクトの開発環境整備や基盤構築、初期段階での開発</b>
            をしています。
          </Text>
          <li>RailsAPIでの開発経験</li>
          <li>Punditを使った認可の実装</li>
          <li>モノリシックなRailsの開発経験</li>
          <li>コミット時にRubocopを走らせる</li>
          <li>Firebaseを使った認証機能の開発経験</li>
          <li>Sendgrid+ActionMailerのメール送信構築</li>
          <li>テーブル数500以上でのRailsの保守改修作業</li>
          <li>Webフロント,NativeアプリのAPIとしての開発</li>
          <li>Algoliaを使った全文検索の構築（バックエンド検索）</li>
          <li>ActiveStorage+S3による画像,動画ファイルの管理機能実装</li>
          <li>Cookie,CORS設定,HTTPS通信でのSameSite,Secureなどの設定</li>

          <Text>
            <b>【フロントエンド】</b>
          </Text>
          <Text>
            モノリシックなRails環境でのフロント開発やSPA環境でのNext.jsの開発経験があります。最近は、
            <b>Next.js+TypeScript+Stoplightでのスキーマ駆動</b>
            での様々な機能開発をしています。また、ユーザーが心地よく使えるようにパフォーマンス向上の面に気をつけて開発をしていました。
          </Text>
          <li>レスポンシブ対応</li>
          <li>Atomic Designでの開発</li>
          <li>ContextAPIを使った状態管理</li>
          <li>Firebaseを使った認証機能の開発経験</li>
          <li>Next.js+TypeScript環境での開発経験</li>
          <li>Next.jsでのSSG,SSR,ISRを使用した開発</li>
          <li>FLOCSS,BEM設計でのCSS（SCSS）開発経験</li>
          <li>Stoplightによるスキーマ駆動での開発と環境構築経験</li>
          <li>Algoliaを使った全文検索の構築（フロントエンド検索）</li>
          <li>CSSフレームワーク（Chakra）を使った実務での開発経験</li>

          <Text>
            <b>【ネイティブ】</b>
          </Text>
          <Text>
            React
            Nativeを使ったクロスプラットフォームでのネイティブアプリ開発の開発経験があります。最近は
            <b>新規プロジェクトの開発を担当しています。</b>
          </Text>
          <li>Expo環境での開発</li>
          <li>動画撮影機能の開発</li>
          <li>Expoを使わない環境での開発</li>
          <li>Firebaseを使ったGoogle認証機能の作成</li>
          <li>Algoliaを使った全文検索の構築（フロントエンド検索）</li>

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
              FLOCSS,BEM設計), Docker, CircleCI, AWS, RSpec, TypeScript
            </p>
          </QuoteBox>
          <Text>
            フルタイム・インターンとしてジョイン。大学を休学していたので、
            <b>週5フルタイムで勤務していました。</b>主にWeb、特にRuby on
            Railsでの保守改修・新規機能開発のタスクをこなしていました。レビュー文化が浸透していたので、経験が深い先輩エンジニアから質の高いコードの書き方を学ばせていただきました。
          </Text>
          <Text>
            FLOCSS,BEM設計でのデザインリニュアール（レスポンシブ対応有り）や、
            <b>Railsを使った新規機能単位での開発</b>
            、RSpecによるテストコード記述、Github-Flowでの開発などの濃い経験を積ませていただきました。
          </Text>
          <Text>
            <b>【SaaSスタートアップ】</b>
          </Text>
          <QuoteBox>
            <p>全体：10人未満（時期によって変動あり）</p>
            <p>エンジニア：6人（時期によって変動あり）</p>
            <p>期間：2020/11/01〜現在</p>
            <p>勤務形態：正社員・執行役員</p>
            <p>
              担当業務：<b>新規事業開発・PM・技術選定・インフラ構築</b>
            </p>
            <p>
              使用技術：Ruby on Rails, Next.js, TypeScript, Docker,
              GithubActions, AWS, Vercel, GCP, ReactNative, Firebase, Algolia,
              Electron, ffmpeg
            </p>
          </QuoteBox>
          <Text>
            エンジニア開発リーダー、執行役員としてジョイン。
            <b>
              フロント、バックエンド、インフラ、ネイティブアプリの技術選定・新規開発をしながらPMを担っています。
            </b>
            技術者に止まらず、
            <b>
              採用活動やビジネスサイドの議論にも積極的に参加し、サービスの質向上に勤めています。
            </b>
          </Text>
          <Text>
            インフラ側では
            <b>AWSでのECS（Fargate）を使った0からのインフラ構築、</b>
            ステージング環境の構築、GithubActionsを使ったCI/CDパイプラインの構築、デプロイ失敗時に自動ロールバック構築などを担当しました。そして自動翻訳機能の開発、AWSとGCPを連携させて、音声からテキスト（Speech
            to
            Text）自動生成機能の開発、動画ファイルから音声ファイルを作成→音声ファイルから文字起こし→字幕ファイルを生成する自動字幕機能の開発、AWS
            SDKを使ったアプリケーション開発、ElastiCacheを使ったredisの導入、500エラーが本番環境で発生した時にSlackに通知する仕組みなども作りました。
          </Text>
          <Text>
            バックエンドのRails側ではコミット時にRubocopを走らせるなどの基盤構築、Docker-composeを使った開発環境のDocker化、
            <b>FirebaseAuthentication+Rails+Next.js構成のGoogle認証の構築、</b>
            SendGrid+ActionMailerを使ったメール送信などの実装、ActiveStorage+S3による画像,動画ファイルの管理機能、動画のトリミング機能（ffmpeg）などの実装を担当しました。
          </Text>
          <Text>
            フロント側ではNext.jsの基盤構築、TypeScriptを使ったタイプセーフな開発、
            <b>Algoliaを使った全文検索の構築、</b>
            CSSフレームワーク（Chakra-UI）を使った開発、Stoplightを使ったスキーマ駆動開発、Atomic
            Designでの開発、ContextAPIを使った状態管理、など他にも様々な機能開発を行っています。
          </Text>
          <Text>
            ネイティブアプリ開発ではAlgoliaを使った全文検索の構築、Google認証の実装、動画撮影機能などを行っています。
          </Text>
          <Text>
            ビジネスサイドでは、
            <b>
              採用活動、仕様レベルからのディスカッションや壁打ち、投資家向けへのピッチ経験
            </b>
            などがあります。
          </Text>
        </MainLayout>
      </Box>
    </>
  )
}

export default career
