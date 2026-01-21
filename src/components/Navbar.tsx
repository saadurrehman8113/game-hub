import { HStack, Image, Text } from "@chakra-ui/react"
import ColorModeSwitch from './ColorModeSwitch'
import logo from '../assets/react.svg'

const Navbar = () => {
    return (
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image src={logo} boxSize='60px'></Image>
            <Text>Navbar</Text>
            <ColorModeSwitch />
        </HStack >
    )
}

export default Navbar