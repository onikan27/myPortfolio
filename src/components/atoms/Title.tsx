import { Flex, Text } from '@chakra-ui/layout'

type TitleProps = {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Flex>
      <Text fontSize="32px" color="222" fontWeight="700" lineHeight="1.5">
        {title}
      </Text>
    </Flex>
  )
}

export default Title
