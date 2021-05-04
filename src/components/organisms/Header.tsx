import { Flex, Link, Text } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <Flex h="64px" mr="24px" ml="24px" justifyContent="space-between">
      <Flex alignItems="center">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text fontSize="30px" fontWeight="700">
            Akino
          </Text>
        </Link>
      </Flex>
      <Flex w="230px" alignItems="center" justifyContent="space-between">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text fontSize="18px" fontWeight="700">
            About
          </Text>
        </Link>

        <Link href="/career" style={{ textDecoration: 'none' }}>
          <Text fontSize="18px" fontWeight="700">
            Career&amp;Skill
          </Text>
        </Link>

        <Link href="/blog" style={{ textDecoration: 'none' }}>
          <Text fontSize="18px" fontWeight="700">
            Blog
          </Text>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Header
