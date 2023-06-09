import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  HStack,
  IconButton,
  SlideFade,
  useToast,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { ProjectsModel } from '@prisma/client';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { HiCheck } from 'react-icons/hi';
import { MdRemove } from 'react-icons/md';
import CustomTag from '~/components/common/tags/CustomTag';
import { RemoveToast, SuccessToast } from '~/components/common/toasts/Toasts';
import GetFormattedLink from '~/components/HOC/GetLink';
import useListStore from '~/store/listStore';
import { formatNumberWithK } from '~/utils/formatWithK';

type PropsType = {
  project: ProjectsModel;
};

// In the ProjectsList component
type ProjectsListProps = {
  allProjectsData: ProjectsModel[];
};

const ProjectCard = ({ project }: PropsType) => {
  const router = useRouter();
  const toast = useToast();
  const addProject = useListStore((state) => state.addProject);
  const removeProject = useListStore((state) => state.removeProject);
  const projectList = useListStore((state) => state.projectList);

  const [isHovered, setIsHovered] = useState(false);
  const [addedToList, setAddedToList] = useState(
    !!projectList.find((item) => item.id === project.id)
  );

  const industry = JSON.parse(project.industry);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleAddOrRemoveProject = () => {
    if (addedToList) {
      removeProject(project.id);
      setAddedToList(false);
      RemoveToast({ toast, message: 'Project removed from list' });
    } else {
      addProject(project);
      setAddedToList(true);
      SuccessToast({ toast, message: 'Project added to list' });
    }
  };

  useEffect(() => {
    setAddedToList(!!projectList.find((item) => item.id === project.id));
  }, [projectList]);

  return (
    <Card
      onClick={() => setIsHovered(true)}
      outline={addedToList ? '2px solid #659C95' : '2px solid transparent'}
      p="0"
      h="23rem"
      cursor="pointer"
      w="100%"
      maxW={{
        base: '85vw',
        sm: '87vw',
        md: '44vw',
        lg: '29.5vw',
        xl: '25.5rem',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      gap="0"
      background={'#0C0D0D'}
      border="none"
      position={'relative'}
    >
      {addedToList && (
        <Center
          position={'absolute'}
          w="1.6rem"
          h="1.6rem"
          rounded="full"
          bg="#659C95"
          right="-0.6rem"
          top="-0.6rem"
        >
          <HiCheck size={16} color="#001F1B" />
        </Center>
      )}
      <Center w="full" bg="#001F1B" borderTopRadius={'16px'}>
        <HStack
          w="full"
          gap="8px"
          borderColor="red"
          borderBottom={'red'}
          padding={'12px 24px'}
          borderTopRadius={'16px'}
          justifyContent="space-between"
        >
          <Box
            w="full"
            as="p"
            noOfLines={1}
            whiteSpace={'nowrap'}
            color="#ADB8B6"
            textStyle={'overline4'}
            textTransform="uppercase"
            letterSpacing={'0.2em'}
            fontSize={{ base: '8px', md: '10px' }}
          >
            Participating In
          </Box>
          <Box
            display={{ base: 'none', md: 'block' }}
            as="p"
            w="fit-content"
            whiteSpace={'nowrap'}
            textStyle={'title5'}
            color="#A8F0E6"
          >
            Alpha Grant Round
          </Box>
        </HStack>
      </Center>
      <VStack
        w="full"
        alignItems={'start'}
        justifyContent="space-between"
        h="full"
        gap="0"
      >
        <VStack p="24px" gap="16px" w="full" alignItems={'start'}>
          <HStack justifyContent={'space-between'}>
            <Avatar
              src={project.logo}
              name="anchor"
              borderRadius={'8px'}
              size={{ base: 'md', md: 'lg' }}
            />
          </HStack>
          <VStack gap="0" spacing="0" w="full">
            <HStack align={'end'} w="full" justify="space-between">
              <Box as="p" textStyle={{ base: 'title4', md: 'title3' }}>
                {project.name}
              </Box>
              <Box
                as="p"
                color="#A8F0E6"
                textStyle={{ base: 'title4', md: 'title3' }}
              >
                ${formatNumberWithK(10)}
              </Box>
            </HStack>
            <HStack w="full" justify="space-between">
              <Center>
                <GetFormattedLink link={project.project_link} />
              </Center>
              <Box
                color="neutral8"
                as="p"
                textStyle={{ base: 'body5', md: 'body5' }}
              >
                Raised
              </Box>
            </HStack>
          </VStack>
          <Box
            color="neutral8"
            as="p"
            textStyle={{ base: 'body4', md: 'body4' }}
            sx={{
              noOfLines: '2',
            }}
            alignContent="start"
            alignItems={'start'}
            textAlign={'start'}
          >
            {project.short_description}
          </Box>
        </VStack>
        <VStack
          marginTop={'0px !important'}
          p="8px 24px 24px 24px"
          w="full"
          position={'relative'}
        >
          <SlideFade in={isHovered} offsetY="0px" reverse>
            <HStack
              zIndex={'9'}
              w="full"
              justifyContent="start"
              position="absolute"
              left="0"
              p="8px 24px 24px 24px"
              bottom="0px"
              backgroundColor={'#0C0D0D'}
              borderRadius="36px"
              justify={'space-between'}
            >
              <Button
                background={'#1D1F1E'}
                color="white"
                fontWeight={'700'}
                borderColor="transparent"
                outline="none"
                w="calc(100% - 2.2rem)"
                variant="connect_wallet"
                onClick={() => {
                  router.push({
                    pathname: '/projects/[id]',
                    query: { id: project.id },
                  });
                }}
              >
                View Details
              </Button>
              <IconButton
                background={'#1D1F1E'}
                color="white"
                fontWeight={'700'}
                borderColor="transparent"
                outline="none"
                onClick={handleAddOrRemoveProject}
                aria-label="link"
                variant="connect_wallet"
                icon={
                  addedToList ? <MdRemove size={26} /> : <BsPlus size={26} />
                }
              />
            </HStack>
          </SlideFade>
          <HStack
            overflowX="hidden" // Set overflowX to hidden
            w="full"
            justify="space-between"
          >
            <Box
              w="full"
              flex="4"
              minWidth="0" // Add minWidth to allow the box to shrink
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                top: '45%',
                right: '0%',
                transform: 'translateY(-50%)',
                height: '2.2rem',
                width: '3rem',
                background: 'linear-gradient(90deg, #0C0D0D00 0%, #0C0D0D 80%)',
              }}
            >
              <HStack
                overflow="clip"
                w="full"
                mt="auto"
                justify="start"
                whiteSpace="nowrap" // Set whiteSpace to nowrap
              >
                {industry.map((tag: any, key: any) => {
                  return (
                    <CustomTag color={tag.label} key={key}>
                      {tag.label}
                    </CustomTag>
                  );
                })}
              </HStack>
            </Box>
            <Flex
              justify="end"
              align={'center'}
              flex="1"
              w={'full'}
              position="relative"
              zIndex="1"
            >
              <AvatarGroup size="xs" max={3}>
                <Avatar
                  outline="2px solid #0C0D0D"
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  outline="2px solid #0C0D0D"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar
                  outline="2px solid #0C0D0D"
                  name="Kent Dodds"
                  src="https://bit.ly/kent-c-dodds"
                />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
              <Box as="p" color="white" textStyle={'body4'}>
                +{formatNumberWithK(10)}
              </Box>
            </Flex>
          </HStack>
        </VStack>
      </VStack>
    </Card>
  );
};

const ProjectsList = ({ allProjectsData }: ProjectsListProps) => {
  return (
    <Container maxW="7xl" overflow={'visible'} p="0">
      <Wrap
        overflow={'visible'}
        py="8px"
        spacing="1.5rem"
        w="100%"
        margin="0"
        justify={'center'}
        align="center"
        direction={{ base: 'column', sm: 'row', md: 'row' }}
      >
        {allProjectsData.map(
          (project: ProjectsModel, key: React.Key | null | undefined) => {
            return <ProjectCard project={project} key={key} />;
          }
        )}
      </Wrap>
    </Container>
  );
};

export default ProjectsList;
