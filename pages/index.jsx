import { useSession } from "next-auth/react"
import { Flex, Spinner } from "@chakra-ui/react"

import SignIn from "../components/SignIn"
import HomePage from "../components/HomePage"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <Flex minH="100vh" justify="center" align="center">
        <Spinner />
      </Flex>
    )
  }

  return <>{!session ? <SignIn /> : <HomePage />}</>
}
