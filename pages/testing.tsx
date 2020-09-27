import { Button, Flex, Heading, Link, useColorMode } from "@chakra-ui/core";

export default function testing() {
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
        <Heading>Testando link</Heading>

        <Button 
          onClick={toggleColorMode} 
          width={32}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>

        
        <Link href="/">Voltar</Link>
      </Flex>
    </Flex>
  )
}
