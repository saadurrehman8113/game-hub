import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List paddingTop={2}>
      <ListItem>
        <HStack>
          <Skeleton boxSize={10} borderRadius={10} />
          <SkeletonText noOfLines={1} flex={1} />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
