import { RepeatClockIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'

const UpdateDay: React.FC = ({ children }) => {
  return (
    <Flex color="#708090" alignItems="center">
      <RepeatClockIcon mr="4px" />
      {children}
    </Flex>
  )
}

export default UpdateDay
