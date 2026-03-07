import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import type { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
