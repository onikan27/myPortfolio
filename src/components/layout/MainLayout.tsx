import { Box } from '@chakra-ui/layout'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Box w="620px" m="0 auto">
        {children}
      </Box>
    </>
  )
}

export default MainLayout
