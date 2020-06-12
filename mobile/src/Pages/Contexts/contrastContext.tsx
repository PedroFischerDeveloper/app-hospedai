import {useState} from 'react';
import constate from 'constate';

const [ContrastProvider, useContrast] = constate(() => {
  const [contrast, setContrast] = useState<boolean>(false);

  return {
    contrast,
    setContrast,
  };
});

export {ContrastProvider};

export default useContrast;
