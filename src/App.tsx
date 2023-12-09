import type { FC } from 'react';
import { Header } from './common/components/header/header.components';
import { Banner } from './common/components/banner/banner.components';

interface AppProps { }


export const App: FC<AppProps> = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}


