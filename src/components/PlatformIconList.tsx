import {FaWindows, FaPlaystation, FaApple, FaLinux, FaAndroid, FaXbox} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from 'react-icons/bs';
import {Platform} from "../hooks/useGames";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms} : Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        nintendo: SiNintendo
    }

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color='gray.500'> </Icon>)}
        </HStack>
    )
}
export default PlatformIconList
