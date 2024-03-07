import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Image, List, ListItem, Progress, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

// Sample songs list
const songs = [
  {
    title: "Song One",
    artist: "Artist A",
    albumCover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcwOTgwNTA1Mnww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    title: "Song Two",
    artist: "Artist B",
    albumCover: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcwOTgwNTA1Mnww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    title: "Song Three",
    artist: "Artist C",
    albumCover: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcwOTgwNTA1Mnww&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const Index = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxW="container.md" centerContent>
      <VStack spacing={8} py={10}>
        <Heading>Music Player</Heading>
        <Box boxSize="sm">
          <Image borderRadius="md" src={songs[currentSongIndex].albumCover} alt="Album cover" />
        </Box>
        <VStack spacing={3}>
          <Heading size="lg">{songs[currentSongIndex].title}</Heading>
          <Text fontSize="lg">{songs[currentSongIndex].artist}</Text>
        </VStack>
        <Flex alignItems="center">
          <Button onClick={prevSong} size="lg" variant="ghost">
            <FaBackward />
          </Button>
          <Button onClick={togglePlay} size="lg" mx={4}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>
          <Button onClick={nextSong} size="lg" variant="ghost">
            <FaForward />
          </Button>
        </Flex>
        <Progress value={40} width="full" size="xs" colorScheme="pink" />
        <List spacing={3}>
          {songs.map((song, index) => (
            <ListItem key={index} p={2} bg={currentSongIndex === index ? "gray.200" : "transparent"} borderRadius="md" cursor="pointer" onClick={() => setCurrentSongIndex(index)}>
              <Flex justify="space-between">
                <Text fontWeight={currentSongIndex === index ? "bold" : "normal"}>{song.title}</Text>
                <Text fontSize="sm" color="gray.500">
                  {song.artist}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
