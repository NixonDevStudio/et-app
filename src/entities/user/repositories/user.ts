import { UserEntity } from "@/entities/user/domain";
import { prisma } from "@/shared/lib/db";
import { Prisma } from "@prisma/client";

export const saveUser = (user: UserEntity): Promise<UserEntity> => {
  return prisma.user.upsert({
    where: {
      id: user.id,
    },
    create: user,
    update: user,
  });
};

export async function getUser(
  where: Prisma.UserWhereUniqueInput,
): Promise<UserEntity | null> {
  return prisma.user.findFirst({ where });
}

export const userRepository = { getUser, saveUser };
