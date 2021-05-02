import { Flex, Text } from '@chakra-ui/layout'

type TitleProps = {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Flex>
      <Text fontSize="32px" fontWeight="700" lineHeight="1.5" color="#222">
        {title}
      </Text>
    </Flex>
  )
}

export default Title
