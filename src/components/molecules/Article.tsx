import { Box, Flex, Image, Link } from '@chakra-ui/react'

type ArticleProps = {
  url: string
  title: string
  platform: 'zenn' | 'note'
  release_date: string
}

const Article: React.FC<ArticleProps> = ({
  url,
  title,
  platform,
  release_date,
}) => {
  return (
    <Link href={url} style={{ textDecoration: 'none' }}>
      <Box
        borderRadius="8px"
        h="240px"
        boxShadow="0 3px 6px -2px rgb(0 20 60 / 20%)"
        w={['320px', '290px']}
        position="relative"
        mb={['20px', 0]}
      >
        <Flex
          bg="#f2f4f5"
          h="100px"
          borderRadius="8px 8px 0 0"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          {platform == 'zenn' && (
            <Flex>
              <Image src="/skill/zenn.png" w="50px" h="50px" />
            </Flex>
          )}
        </Flex>
        <Box fontSize="16px" fontWeight="700" m="16px" lineHeight="1.5">
          <p>{title}</p>
        </Box>
        <Box
          color="#708090"
          fontSize="12px"
          position="absolute"
          bottom="0"
          left="16px"
        >
          <p>{release_date}</p>
        </Box>
      </Box>
    </Link>
  )
}

export default Article
