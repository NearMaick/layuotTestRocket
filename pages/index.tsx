import { Text, Flex, Heading, Link , Switch, useColorMode } from "@chakra-ui/core";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
      as='div'
      direction="column"
      >
        <Heading>Maick souza</Heading>

        <Text 
          width={32}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Text>

        <Switch 
          onChange={toggleColorMode} 
          defaultIsChecked 
        />
        <Link href="/testing">Teste</Link>
      </Flex>
    </Flex>
  )
}
