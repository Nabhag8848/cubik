import { Menu, MenuButton, MenuList } from '@chakra-ui/menu';
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  MenuDivider,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { BiChevronDown, BiUser } from 'react-icons/bi';
import { MdPowerSettingsNew, MdUpload } from 'react-icons/md';
import ProfileDetails from './ProfileDetails';
import WalletBalance from './WalletBalance';

const UserNavMenu = () => {
  const { disconnect } = useWallet();
  const { data: session } = useSession();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSignOut() {
    disconnect()
      .then(() => {
        signOut();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  if (!session?.user.id) return <>no user</>;

  const NavMenuButtons = () => {
    return (
      <>
        <Button
          bg="transparent"
          rounded="md"
          textStyle={'body4'}
          color="white"
          display={'flex'}
          alignItems="center"
          justifyContent={'start'}
          leftIcon={<BiUser size={20} color={'#ADB8B6'} />}
          iconSpacing="8px"
          p={{ base: '12px', md: '8px' }}
          onClick={() => {
            console.log('redirect to profile - ', session.user.username);
            router.push('/' + session.user.username);
          }}
          sx={{
            width: '-webkit-fill-available',
          }}
          _hover={{
            backgroundColor: '#141414',
          }}
          _active={{
            backgroundColor: '#141414',
          }}
        >
          <Box as="p" textStyle={'body4'}>
            Profile
          </Box>
        </Button>
        <Button
          bg="transparent"
          rounded="md"
          textStyle={'body4'}
          color="white"
          display={'flex'}
          alignItems="center"
          justifyContent={'start'}
          leftIcon={<MdUpload size={20} color={'#ADB8B6'} />}
          iconSpacing="8px"
          p={{ base: '12px', md: '8px' }}
          onClick={() => {
            console.log('pushing to submit project');
            router.push('/submit-project');
          }}
          sx={{
            width: '-webkit-fill-available',
          }}
          _hover={{
            backgroundColor: '#141414',
          }}
          _active={{
            backgroundColor: '#141414',
          }}
        >
          <Box as="p" textStyle={'body4'}>
            Submit Project
          </Box>
        </Button>
        <Button
          bg="transparent"
          rounded="md"
          textStyle={'body4'}
          color="white"
          display={'flex'}
          alignItems="center"
          justifyContent={'start'}
          leftIcon={<MdPowerSettingsNew size={20} color={'#ADB8B6'} />}
          p={{ base: '12px', md: '8px' }}
          onClick={handleSignOut}
          sx={{
            width: '-webkit-fill-available',
          }}
          _hover={{
            backgroundColor: '#141414',
          }}
          _active={{
            backgroundColor: '#141414',
          }}
        >
          Disconnect Wallet
        </Button>
      </>
    );
  };
  return (
    <>
      <Avatar
        display={{ base: 'flex', md: 'none' }}
        as="button"
        onClick={onOpen}
        width={{ base: '30px', md: '36px' }}
        height={{ base: '30px', md: '36px' }}
        borderRadius={6}
        name={session.user.username}
        src={session.user.profilePicture}
      />
      <Drawer
        variant="cubik"
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack gap="16px" w="full" align={'start'}>
              <ProfileDetails />
              <WalletBalance />{' '}
              <Box w="full" h="1px" backgroundColor={'#1D1F1E'} />
              <VStack gap="0px" align={'start'} w="full">
                <NavMenuButtons />
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Menu>
        <MenuButton
          display={{ base: 'none', md: 'flex' }}
          backgroundColor={'transparent'}
          _hover={{
            backgroundColor: 'transparent',
          }}
          _active={{
            backgroundColor: 'transparent',
          }}
          _focus={{
            backgroundColor: 'transparent',
          }}
          as={Button}
          w={'fit-content'}
          p="0"
          rightIcon={<BiChevronDown size={26} color="#A8F0E6" />}
        >
          <Avatar
            width={{ base: '28px', md: '36px' }}
            height={{ base: '28px', md: '36px' }}
            borderRadius={6}
            name={session.user.username}
            src={session.user.profilePicture}
          />
        </MenuButton>
        <MenuList
          background={'linear-gradient(322.35deg, #000000 0%, #0F0F0F 100%)'}
          gap="8px"
          display={'flex'}
          flexDir="column"
        >
          <ProfileDetails />
          <WalletBalance />
          <MenuDivider />
          <NavMenuButtons />
        </MenuList>
      </Menu>
    </>
  );
};

export default UserNavMenu;
