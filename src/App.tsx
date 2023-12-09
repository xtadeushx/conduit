import type { FC } from 'react';
import { Header } from './common/components/header/header.components';

interface AppProps { }


export const App: FC<AppProps> = () => {
  return (
    <div className="">
      <Header />
    </div>
  );
}


