// import { useSession } from "next-auth/react"
import { Flex, Stack, Button, Heading, Text } from "@chakra-ui/react"
import { signIn } from "next-auth/react"

export default function Home() {
  // const { data: session } = useSession()

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing={4} mx="auto" w="md" maxW="md" py={12} px={6}>
        <Heading fontSize="xl">Sign in with your Twitter account</Heading>
        <Text fontSize="sm" color="gray.500">
          You need to authenticate with Twitter so we can fetch users you are following and filter through their tweets.
        </Text>
        <Button colorScheme="twitter" onClick={() => signIn("twitter")}>
          Sign in with Twitter
        </Button>
      </Stack>
    </Flex>
  )
}
