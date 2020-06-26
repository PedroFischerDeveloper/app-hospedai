import {useState} from 'react';
import constate from 'constate';

export type House = {
  id: number;
  title: string;
  stars: number[];
  description: string;
  address: string;
  city: string;
  uf: string;
};

const [MainProvider, useMain] = constate(() => {
  const [main, setMain] = useState<House>();

  return {
    main,
    setMain,
  };
});

export {MainProvider};

export default useMain;
