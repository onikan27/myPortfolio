import { Box } from '@chakra-ui/layout'
import Header from 'src/components/organisms/Header'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Box borderBottom="1px solid rgba(92,147,187,0.17)" mb="32px">
        <Header />
      </Box>
      <Box w="620px" m="0 auto">
        {children}
      </Box>
      <Box mt="48px" />
    </>
  )
}

export default MainLayout
