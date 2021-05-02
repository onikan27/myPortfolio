import { Flex, Text } from '@chakra-ui/layout'

const Header: React.FC = ({ children }) => {
  return (
    <Flex>
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

export default Header
