import { Flex, Text } from '@chakra-ui/layout'

const Title: React.FC = ({ children }) => {
  return (
    <Flex>
      <Text fontSize="32px" fontWeight="700" lineHeight="1.5" color="#222">
        {children}
      </Text>
    </Flex>
  )
}

export default Title
