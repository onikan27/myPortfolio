import { Box } from '@chakra-ui/layout'

const QuoteBox: React.FC = ({ children }) => {
  return (
    <Box bg="#f7f7f7" mt="36px" mb="36px" p="24px 32px" fontSize="16px">
      {children}
    </Box>
  )
}

export default QuoteBox
