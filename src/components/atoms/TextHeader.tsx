import { Flex, Text } from '@chakra-ui/layout'

const TextHeader: React.FC = ({ children }) => {
  return (
    <Flex borderBottom="1px solid rgba(92,147,187,.17)">
      <Text
        fontSize="24px"
        fontWeight="700"
        lineHeight="1.75"
        color="#222"
        mt="50px"
      >
        {children}
      </Text>
    </Flex>
  )
}

export default TextHeader
