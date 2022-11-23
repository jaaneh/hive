import { useRef } from "react"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { useDisclosure, chakra, Box, Flex, HStack, VStack, CloseButton, IconButton, Button } from "@chakra-ui/react"

import { AiOutlineMenu } from "react-icons/ai"

export default function Header() {
  const mobileNav = useDisclosure()
  const ref = useRef(null)

  const SignOutButton = (
    <Box
      display={{ base: "none", md: "flex" }}
      onClick={signOut}
      alignItems="center"
      bg="gray.100"
      borderWidth="1px"
      borderColor="gray.200"
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color="gray.800"
      outline="0"
      userSelect="none"
      ml={5}
      _hover={{
        bg: "gray.100",
        borderColor: "gray.300",
        cursor: "pointer",
      }}
      _active={{
        borderColor: "gray.200",
      }}
      _focus={{
        boxShadow: "outline",
      }}
    >
      <Box as="strong" lineHeight="inherit" fontWeight="semibold" onClick={() => signOut({ redirect: false })}>
        Sign Out
      </Box>
    </Box>
  )

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg="gray.800"
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton aria-label="Close menu" justifySelf="self-start" onClick={mobileNav.onClose} />
      <Button w="full" variant="outline" onClick={signOut}>
        Sign Out
      </Button>
    </VStack>
  )

  return (
    <Box pos="relative">
      <chakra.header ref={ref} shadow="sm" w="full" overflowY="hidden">
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>{/* <Logo /> */}</HStack>
              </Link>
            </Flex>

            <Flex justify="flex-end" w="full" maxW="824px" align="center" color="gray.400">
              {SignOutButton}
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  )
}
