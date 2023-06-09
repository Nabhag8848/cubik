import { Avatar, Box, HStack, Stack, VStack } from '@chakra-ui/react';
import { ProjectsModel } from '@prisma/client';
import React from 'react';
import {
  FaDiscord,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import CustomTag from '~/components/common/tags/CustomTag';

export const ProjectLink = ({ urlName }: { urlName: string }) => {
  switch (urlName) {
    case 'url':
      return <HiLink color="#E0FFFD" size={18} />;
    case 'twitter':
      return <FaTwitter color="#E0FFFD" size={18} />;
    case 'discord':
      return <FaDiscord color="#E0FFFD" size={18} />;
    case 'telegram':
      return <FaTelegramPlane color="#E0FFFD" size={18} />;
    case 'youtube':
      return <FaYoutube color="#E0FFFD" size={18} />;
    case 'github':
      return <FaGithub color="#E0FFFD" size={18} />;
    default:
      return <></>;
  }
};

const ProjectDetailsHeader = ({
  projectDetails,
}: {
  projectDetails: ProjectsModel;
}) => {
  return (
    <Stack
      direction={{ base: 'row', md: 'row' }}
      gap={{ base: '8px', md: '24px' }}
      width={'100%'}
      alignItems={'center'}
    >
      <Avatar
        src={projectDetails?.logo}
        width={{ base: '4.4rem', md: '6.2rem' }}
        height={{ base: '4.4rem', md: '6.2rem' }}
      />
      <VStack
        justify={'center'}
        gap={{ base: '2px', md: '14px' }}
        alignItems={'start'}
        justifyContent="center"
      >
        <Stack gap="24px" direction={'row'}>
          <Box
            as="p"
            minW="6rem"
            textStyle={{ base: 'title1', md: 'headline3' }}
            textTransform="capitalize"
            color="neutral.11"
            // prevent the name from going into second line
            noOfLines={1}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {projectDetails?.name}
          </Box>
          <HStack
            overflow={'hidden'}
            flexDirection={'row'}
            spacing="0.4rem"
            pt="0.5rem"
            display={{ base: 'none', md: 'flex' }}
          >
            {JSON.parse(projectDetails.industry)?.map(
              (tag: any, key: React.Key | null | undefined) => {
                return (
                  <CustomTag color={tag.label} key={key}>
                    {tag.label}
                  </CustomTag>
                );
              }
            )}
          </HStack>
        </Stack>
        <Box
          as="p"
          textStyle={{ base: 'body4', md: 'body2' }}
          color="neutral.9"
          // prevent the name from going into second line
          noOfLines={2}
          textOverflow="ellipsis"
        >
          {projectDetails?.short_description}
        </Box>
        {/* <HStack>
          <Button
            variant="unstyled"
            display={'flex'}
            alignItems="center"
            rounded="full"
            color="brand.teal6"
            backgroundColor="brand.teal2"
            p={{ base: '0.5rem 0.8rem', md: '0.2rem 1rem' }}
            iconSpacing={{ base: '0.3rem', md: '0.4rem' }}
            leftIcon={<ProjectLink urlName={'url'} />}
            _hover={{
              backgroundColor: 'brand.teal3',
            }}
            as="a"
            href={projectDetails?.project_link}
            target="_blank"
          >
            <Box
              as="p"
              textStyle={{ base: 'body5', md: 'body4' }}
              color="brand.teal.6"
              pb="0.1rem"
            >
              {getDomain(projectDetails?.project_link)}
            </Box>
          </Button>

          {socials.map((link: { name: string; url: string }, key: Key) => (
            <IconButton
              aria-label={link.name}
              variant={'unstyled'}
              fontSize={{ base: 'sm', sm: 'md', md: 'xl' }}
              display="flex"
              alignItems={'center'}
              rounded="full"
              color="brand.teal6"
              backgroundColor="brand.teal2"
              key={key}
              icon={<ProjectLink urlName={link.name} />}
              _hover={{
                backgroundColor: 'brand.teal3',
              }}
              as="a"
              href={link.name}
              target="_blank"
            />
          ))}
        </HStack> */}
      </VStack>
    </Stack>
  );
};

export default ProjectDetailsHeader;
