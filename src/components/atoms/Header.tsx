import { Flex, Text } from '@chakra-ui/layout'

type HeaderProps = {
  header: string
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <Flex>
      <Text fontSize="24px" fontWeight="700" lineHeight="1.75" color="#222">
        {header}
      </Text>
    </Flex>
  )
}

export default Header
