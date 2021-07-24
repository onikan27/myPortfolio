import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <Flex h="64px" mr="24px" ml="24px" justifyContent="space-between">
      <Flex alignItems="center">
        <Box cursor="pointer">
          <Link href="/">
            <Text fontSize="30px" fontWeight="700">
              Akino
            </Text>
          </Link>
        </Box>
      </Flex>
      <Flex w="230px" alignItems="center" justifyContent="space-between">
        <Box cursor="pointer">
          <Link href="/">
            <Text fontSize="18px" fontWeight="700">
              About
            </Text>
          </Link>
        </Box>

        <Box cursor="pointer">
          <Link href="/career">
            <Text fontSize="18px" fontWeight="700">
              Career&amp;Skill
            </Text>
          </Link>
        </Box>

        <Box cursor="pointer">
          <Link href="https://onikan-blog.com/">
            <Text fontSize="18px" fontWeight="700">
              Blog
            </Text>
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
