import {
  Box,
  Button,
  CardBody,
  CardFooter,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import {
  FaDiscord,
  FaGithub,
  FaLink,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FormData } from '~/pages/submit-project';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
type StepTwoProps = {
  trigger: UseFormTrigger<FormData>;
  onSubmit: () => void;
  onPrevious: () => void;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<StepTwoFormValues>;
};

type StepTwoFormValues = {
  github: string;
  twitter: string;
  projectLink: string;
  telegram: string;
  discord: string;
};
const StepTwo: React.FC<StepTwoProps> = ({
  trigger,
  onSubmit,
  register,
  onPrevious,
  errors,
}: StepTwoProps) => {
  const handleSubmit = async () => {
    const isValid = await trigger();
    if (isValid) {
      onSubmit();
    }
  };

  return (
    <>
      <CardBody>
        <FormControl
          isRequired
          isInvalid={Boolean(errors.projectLink)}
          id="projectLink"
        >
          <FormLabel>Project Link</FormLabel>
          <Input
            placeholder="https://example.com"
            type="url"
            {...register('projectLink', {
              required: true,
            })}
          />
          {errors.projectLink ? (
            <FormErrorMessage>{errors.projectLink.message}</FormErrorMessage>
          ) : (
            <FormHelperText></FormHelperText>
          )}
        </FormControl>
        <VStack align={'start'} gap="16px">
          <Box as="p" textStyle="title5" color="neutral.11">
            Socials
          </Box>
          <FormControl
            isRequired
            id="twitter"
            isInvalid={Boolean(errors.twitter)}
          >
            <InputGroup>
              <InputLeftAddon pointerEvents="none">
                <FaTwitter size={'16'} />
                <Text pl="8px" color="#ADB8B6" fontSize="14px" fontWeight="400">
                  Twitter
                </Text>
              </InputLeftAddon>
              <Input
                placeholder="https://twitter.com.com/twitter"
                type="twitter"
                {...register('twitter', {
                  required: true,
                })}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="github">
            <InputGroup>
              <InputLeftAddon pointerEvents="none">
                <FaGithub size={'16'} />
                <Text pl="8px" color="#ADB8B6" fontSize="14px" fontWeight="400">
                  Github
                </Text>
              </InputLeftAddon>
              <Input
                placeholder="https://github.com/example"
                type="url"
                {...register('github')}
              />
            </InputGroup>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.telegram)} id="telegram">
            <InputGroup>
              <InputLeftAddon pointerEvents="none">
                <FaTelegramPlane color="gray.300" />
                <Text pl="8px" color="#ADB8B6" fontSize="14px" fontWeight="400">
                  Telegram
                </Text>
              </InputLeftAddon>
              <Input
                placeholder="https://telegram.com"
                type="url"
                {...register('telegram')}
              />
            </InputGroup>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.discord)} id="discord">
            <InputGroup>
              <InputLeftAddon pointerEvents="none">
                <FaDiscord color="gray.300" />
                <Text pl="8px" color="#ADB8B6" fontSize="14px" fontWeight="400">
                  Discord
                </Text>
              </InputLeftAddon>
              <Input
                placeholder="https://discord.gg"
                type="url"
                {...register('discord')}
              />
            </InputGroup>
          </FormControl>
          <FormControl variant='withAddOn' isInvalid={Boolean(errors.discord)} id="discord">
            <InputGroup>
              <InputLeftAddon pointerEvents="none">
                <FaLink color="gray.300" />
                <Text pl="8px" color="#ADB8B6" fontSize="14px" fontWeight="400">
                  Custom
                </Text>
              </InputLeftAddon>
              <Input
                placeholder="https://example.com"
                type="url"
                {...register('discord')}
              />
            </InputGroup>
          </FormControl>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button
          variant={'outline'}
          onClick={onPrevious}
          leftIcon={<Icon as={FiChevronLeft} width={5} height={5} />}
        >
          Previous
        </Button>
        <Button
          variant={'outline'}
          onClick={handleSubmit}
          rightIcon={<Icon as={FiChevronRight} width={5} height={5} />}
        >
          Next
        </Button>
      </CardFooter>
    </>
  );
};

export { StepTwo };
