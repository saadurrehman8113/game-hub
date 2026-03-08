import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <List paddingY={3}>
      {data.map((genre) => (
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image
              borderRadius={10}
              boxSize={10}
              src={genre.image_background}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
