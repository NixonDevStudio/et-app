'use server';

import { FC } from 'react';
import { Button } from '@/shared/ui/button';
import { dbClient } from '@/shared/lib/db';

export const HomeView: FC = async () => {
  const users = await dbClient.user.findMany();

  return (
    <div>
      <Button size='lg'>Hellow</Button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};
