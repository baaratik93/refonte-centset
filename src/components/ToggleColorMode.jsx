import {Button} from '@chakra-ui/button';
import {useColorMode} from '@chakra-ui/color-mode';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';

export const ToggleColorMode = () => {
  const {colorMode, toggleColorMode} = useColorMode ();

  return (
    <Button
      onClick={() => toggleColorMode ()}
      pos="fixed"
      bottom="10"
      right="3"
      zIndex="1"
      variant="outline"
      style={{background: '#57b024', color: '#0c1e4d'}}
    >

      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}

    </Button>
  );
};
