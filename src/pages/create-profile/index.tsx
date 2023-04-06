import {
  Button,
  Card,
  Center,
  Collapse,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useWallet } from '@solana/wallet-adapter-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { HiCheck } from 'react-icons/hi';

import { v4 as uuidV4 } from 'uuid';
import * as yup from 'yup';
import { WalletAddress } from '~/components/common/wallet/WalletAdd';
import FramerCarousel from '~/components/pages/connect-wallet/create-profile/FramerNFTCarousel';
import ProfilePicture from '~/components/pages/connect-wallet/create-profile/ProfilePicture';
import { trpc } from '~/utils/trpc';

const CreateProfile = () => {
  console.log('create-profile rendered');
  const { publicKey } = useWallet();
  const [pfp, setPFP] = useState<string>(
    `https://source.boringavatars.com/marble/120/${publicKey?.toBase58()}?square&?colors=05299E,5E4AE3,947BD3,F0A7A0,F26CA7,FFFFFF,CAF0F8,CCA43B`
  );
  const [userName, setUsername] = useState<string>('');
  const [creatingNewProfileLoadingState, setCreatingNewProfileLoadingState] =
    useState(false);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const router = useRouter();

  const usernameStatusResponse = trpc.user.checkUsername.useQuery({
    username: userName as string,
  });

  const userCreateMutation = trpc.user.create.useMutation({
    onSuccess: (data) => {
      signIn('credentials', {
        callbackUrl: '',
        redirect: false,
        wallet: publicKey?.toBase58(),
      });
      //todo: redirecting
      router.push({
        pathname: '/[username]',
        query: { username: data.username },
      });
    },
  });

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(0, 'Username must be at least 4 characters')
      .max(15)
      .matches(/^[a-zA-Z0-9]+$/, 'Username must be alphanumeric and no spaces')
      .test(
        'is-unique',
        // @ts-ignore
        function (username: string) {
          if (username?.length < 4) {
            return true;
          }
          setUsername(username);
          if (!usernameStatusResponse.data) {
            return true;
          } else {
            throw new yup.ValidationError(
              username + ' is not available',
              null,
              'username'
            );
          }
        }
      ),
  });

  const {
    handleSubmit,
    trigger,
    getValues,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setCreatingNewProfileLoadingState(true);
    userCreateMutation.mutate({
      username: data.username,
      id: uuidV4(),
      profilePicture: pfp,
      tx: 'afsdsdad',
      mainWallet: publicKey?.toBase58() as string,
    });
  };

  if (creatingNewProfileLoadingState || !publicKey) {
    return (
      <Card
        overflow="hidden"
        w="full"
        maxW={'24rem'}
        mx="auto"
        my="10rem"
        gap="1rem"
      >
        <Center w="full" h="full">
          <Spinner />
        </Center>
      </Card>
    );
  }

  return (
    <Container maxW="full" py={{ base: '2rem', md: '4rem' }}>
      <Card
        overflow="hidden"
        maxW={'24rem'}
        mx="auto"
        gap="1rem"
        p={{ base: '22px', md: '32px' }}
      >
        <FormControl
          w="full"
          pb="1rem"
          variant={'outline'}
          colorScheme={'pink'}
          isRequired
        >
          <FormLabel
            fontSize={{ base: 'xs', md: 'sm' }}
            htmlFor="profilePicture"
          >
            Profile Picture
          </FormLabel>
          <ProfilePicture onOpen={onOpen} pfp={pfp} />
        </FormControl>
        <Collapse in={isOpen} animateOpacity>
          <FramerCarousel onClose={onClose} setPFP={setPFP} PFP={pfp} />
        </Collapse>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            pb="1rem"
            variant={'outline'}
            colorScheme={'pink'}
            isInvalid={!!errors.username}
            isRequired
          >
            <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="username">
              Username
            </FormLabel>
            <InputGroup>
              <Controller
                name="username"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, ...field } }) => (
                  <Input
                    {...field}
                    autoComplete="false"
                    onChange={({ target: { value } }) => {
                      trigger('username');
                      onChange(value);
                    }}
                  />
                )}
              />
              {!creatingNewProfileLoadingState && usernameStatusResponse && (
                <InputRightElement fontSize="18px">
                  {usernameStatusResponse.isLoading && (
                    <Spinner size={'xs'} thickness="1px" />
                  )}
                  {!usernameStatusResponse.data &&
                    !usernameStatusResponse.isLoading &&
                    userName === getValues('username') &&
                    !errors.username && <HiCheck color={'green'} />}
                </InputRightElement>
              )}
            </InputGroup>
            <FormErrorMessage textAlign={'start'}>
              {errors.username && <>{errors.username.message}</>}
            </FormErrorMessage>
          </FormControl>
          {/* ---- wallet ---- */}
          <FormControl pb="1rem" isRequired>
            <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="publickey">
              Wallet Address
            </FormLabel>
            <HStack gap="0.5rem">
              <Center
                rounded="4px"
                bg="#242424"
                height="2.5rem"
                px="1.3rem"
                outline="1px solid #242424"
                w="full"
              >
                <WalletAddress
                  walletAddress={publicKey?.toBase58() as string}
                  size="xs"
                />
              </Center>
            </HStack>
            <FormErrorMessage>
              {errors.publickey ? <>{errors.publickey.message}</> : <></>}
            </FormErrorMessage>
          </FormControl>
          <Button
            variant={'connect_wallet'}
            mt={'3rem'}
            w="full"
            type="submit"
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default CreateProfile;
