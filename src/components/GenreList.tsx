import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";
import getCroppedImageURL from "../services/image-urls";

const GenreList = () => {
  const { data, loading, error } = useGenre();
  const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  error && null;

  return loading ? (
    genreSkeletons.map((gs) => <GenreListSkeleton key={gs} />)
  ) : (
    <List paddingY={3}>
      {data.map((genre) => (
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image
              borderRadius={10}
              boxSize={10}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
