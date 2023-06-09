import { Box, Button, Center, HStack, Stack, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import FlipNumbers from 'react-flip-numbers';
import { BiChevronRight } from 'react-icons/bi';

interface CountdownTimerProps {
  finalDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ finalDate }) => {
  const getTimeRemaining = (endDate: Date) => {
    const total = endDate.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState<number>(
    getTimeRemaining(finalDate).total
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeRemaining(finalDate);
      if (time.total <= 0) {
        clearInterval(interval);
      }
      setTimeRemaining(time.total);
    }, 1000);

    return () => clearInterval(interval);
  }, [finalDate]);

  const formatNumber = (number: number) => {
    return number < 10 ? '0' + number : number;
  };

  return (
    <Box
      display="flex"
      alignItems={{ base: 'start', md: 'center' }}
      justifyContent="center"
      fontWeight={'700'}
    >
      <HStack gap={{ base: '1.8rem', md: '2rem' }}>
        {getTimeRemaining(finalDate).days && (
          <VStack>
            <Box as="p" textStyle={'headline3'}>
              <Box as="p" textStyle="headline3">
                <FlipNumbers
                  height={30}
                  width={22}
                  color="white"
                  //background="black"
                  play
                  perspective={700}
                  numbers={String(
                    formatNumber(getTimeRemaining(finalDate).days)
                  )}
                />
              </Box>
            </Box>
            <Box as="p" textStyle="overline3" color="#B4B0B2">
              Days
            </Box>
          </VStack>
        )}
        {getTimeRemaining(finalDate).hours && (
          <VStack>
            <Box as="p" textStyle={'headline3'}>
              <Box as="p" textStyle="headline3">
                <FlipNumbers
                  height={30}
                  width={22}
                  color="white"
                  //background="black"
                  play
                  perspective={700}
                  numbers={String(
                    formatNumber(getTimeRemaining(finalDate).hours)
                  )}
                />
              </Box>
            </Box>
            <Box as="p" textStyle="overline3" color="#B4B0B2">
              Hours
            </Box>
          </VStack>
        )}
        {getTimeRemaining(finalDate).minutes && (
          <VStack>
            <Box as="p" textStyle={'headline3'}>
              <Box as="p" textStyle="headline3">
                <FlipNumbers
                  height={30}
                  width={22}
                  color="white"
                  //background="black"
                  play
                  perspective={700}
                  numbers={String(
                    formatNumber(getTimeRemaining(finalDate).minutes)
                  )}
                />
              </Box>
            </Box>
            <Box as="p" textStyle="overline3" color="#B4B0B2">
              Minutes
            </Box>
          </VStack>
        )}
      </HStack>
    </Box>
  );
};

interface Ripple {
  x: number;
  y: number;
  size: number;
}

function RippleEffect() {
  const rippleRef = useRef<Ripple[]>([]);

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const newRipple: Ripple = {
      x: event.clientX,
      y: event.clientY,
      size: 0,
    };
    rippleRef.current.push(newRipple);
  };

  return (
    <Center
      onClick={addRipple}
      rounded={'full'}
      p="0.25rem"
      background="#4ADE8020"
    >
      {rippleRef.current.map((ripple, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: '#4ADE80',
          }}
          initial={{ width: 0, height: 0, opacity: 1, scale: 1 }}
          animate={{
            width: 2 * ripple.size,
            height: 2 * ripple.size,
            opacity: 0,
            scale: 2,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            rippleRef.current.splice(index, 1);
          }}
        />
      ))}
      <Center
        rounded="full"
        w="0.5rem"
        h="0.5rem"
        background="#4ADE80"
        boxShadow={`0px 0px ${rippleRef.current.length * 10}px #4ADE80`}
      />
    </Center>
  );
}

const RoundStatus = () => {
  const finalDate = new Date('2023-05-02T00:00:00');

  return (
    <VStack
      gap={{ base: '0.7rem', md: '1rem' }}
      align={{ base: 'start', md: 'center' }}
    >
      <Center
        flexDirection="row"
        p="0.4rem 0.8rem"
        gap="0.5rem"
        rounded="full"
        bg="#091414"
        color="#4ADE80"
      >
        <RippleEffect />
        <Box as="p" textStyle="overline3" textTransform="uppercase">
          On going round ends in
        </Box>
      </Center>
      <CountdownTimer finalDate={finalDate} />
    </VStack>
  );
};

const FundingRoundBanner = () => {
  return (
    <Stack w="full" direction={{ base: 'column', md: 'row' }}>
      <Stack
        maxW={'4xl'}
        p={{ base: '16px', md: '32px' }}
        border="2px solid #ffffff10"
        overflow="hidden"
        background={'#080808'}
        w="full"
        gap="3rem"
        rounded="16px"
        justify={'space-between'}
        align="start"
        direction={{ base: 'column', md: 'row' }}
        position={'relative'}
        _after={{
          content: '""',
          zIndex: '0',
          position: 'absolute',
          top: '-10',
          right: '-20',
          transform: 'translate(-50%, -50%)',
          width: '10vw',
          maxW: '10rem',
          minW: '6rem',
          height: 'full',
          maxH: '12rem',
          minH: '8rem',
          backgroundColor: '#FFE53D',
          filter: 'blur(100px)',
          WebkitFilter: 'blur(100px)',
          rounded: 'full',
        }}
        _before={{
          content: '""',
          zIndex: '0',
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translate(50%, -50%)',
          width: '20vw',
          maxW: '20rem',
          minW: '12rem',
          height: '20vw',
          maxH: '20rem',
          minH: '12rem',
          backgroundColor: '#31F579',
          filter: 'blur(250px)',
          WebkitFilter: 'blur(250px)',
          rounded: 'full',
        }}
      >
        <VStack w="full" align={'start'} spacing="48px">
          <VStack w="full" align={'start'} spacing="24px">
            <Center
              flexDirection="row"
              p="8px 12px"
              gap="0.5rem"
              rounded="full"
              bg="#31F57920"
              color="#4ADE80"
            >
              <RippleEffect />
              <Box as="p" textStyle="body5">
                Round starts in {''}
                <b>{''}2 days</b>
              </Box>
            </Center>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justify={'space-between'}
              align="start"
              gap={{ base: '8px', md: '16px' }}
              w="full"
            >
              <VStack align={'start'} gap="8px">
                <Box
                  color="neutral.11"
                  as="p"
                  textStyle={{ base: 'title1', md: 'headline3' }}
                >
                  Alpha Grant Round
                </Box>
                <Box
                  maxW={{ base: '340px', md: '420px' }}
                  as="p"
                  color="neutral.8"
                  textStyle={{ base: 'body4', md: 'body3' }}
                >
                  A quadratic funding grant round for public goods building on
                  Solana blockchain
                </Box>
              </VStack>
              <HStack
                bg="#ffffff10"
                rounded="full"
                boxShadow={'0px 4px 24px rgba(0, 0, 0, 0.08)'}
                p={{ base: '0.6rem 1.2rem', md: '0.8rem 1.5rem' }}
              >
                <Box
                  whiteSpace={'nowrap'}
                  color="neutral.8"
                  textTransform={'uppercase'}
                  as="p"
                  textStyle={{ base: 'body6', md: 'overline4' }}
                  letterSpacing="2px"
                >
                  Matching Pool :
                </Box>
                <Box as="p" textStyle={{ base: 'body4', md: 'title3' }}>
                  $30,000
                </Box>
              </HStack>
            </Stack>
          </VStack>
          {/* <Button
            rightIcon={<BiChevronRight size={20} />}
            borderRadius="8px"
            p="12px 32px"
            backgroundColor="white"
            colorScheme={'white'}
          >
            Submit Project
          </Button> */}
        </VStack>
        {/* <RoundStatus /> */}
      </Stack>
      {/* <Stack
        maxW={'28rem'}
        p={{ base: '16px', md: '32px' }}
        border="2px solid #ffffff10"
        overflow="hidden"
        background={'#080808'}
        w="full"
        gap="3rem"
        rounded="16px"
        justify={'space-between'}
        align="start"
        direction={{ base: 'column', md: 'row' }}
        position={'relative'}
        _after={{
          content: '""',
          zIndex: '0',
          position: 'absolute',
          bottom: '-60%',
          left: '-10%',
          transform: 'translate(-50%, -50%)',
          width: '12vw',
          maxW: '12rem',
          minW: '8rem',
          height: 'full',
          maxH: '14rem',
          minH: '8rem',
          backgroundColor: '#31F579',
          filter: 'blur(120px)',
          WebkitFilter: 'blur(120px)',
          rounded: 'full',
        }}
      >
        <Center position={'absolute'} bottom="0" right="0%">
          <Image
            src="/images/img.png"
            alt="glass cube"
            width={300}
            height={500}
          />
        </Center>
      </Stack> */}
    </Stack>
  );
};

export default FundingRoundBanner;
