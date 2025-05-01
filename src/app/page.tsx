'use server';

import { FC } from 'react';
import { HomeView } from '@/views/home';
import { AppHeader } from '@/widgets/app-header/app-header';

const Home: FC = async () => (
  <>
    <h1>Page Title</h1>
    <AppHeader variant='public' />
    <HomeView />
  </>
);

export default Home;
