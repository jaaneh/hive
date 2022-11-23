import { Container } from "@chakra-ui/react"

import Header from "./Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxW="container.xl" mt={8} as="main">
        {children}
      </Container>
    </>
  )
}
