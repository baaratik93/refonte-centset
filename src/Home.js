import { Image, Text } from "@chakra-ui/react";
import logo from "./images/logo.png";

export const Home = () => {
  return (
    <div>
      <Text color="blue.500" p={4}>This is responsive text

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iure, accusantium animi ut laudantium dolore illum facilis optio doloribus minus quam necessitatibus. Harum sed sunt odit. Consequatur quibusdam illo dolorum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus quidem numquam a perspiciatis nihil saepe illum, quas quaerat perferendis consectetur natus doloribus quae obcaecati alias. Atque iure fugiat laboriosam.
      </Text>
      <Image src={logo} alt="a kitten" sx={{ filter: "grayscale(100%)" }} />
    </div>
  );
};
