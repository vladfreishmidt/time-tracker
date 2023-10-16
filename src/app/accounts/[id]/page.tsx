import { db } from "@/modules/db";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const AccountDetailsPage: React.FC<Props> = async ({ params }) => {
  const account = await db.account.findUniqueOrThrow({
    where: {
      id: params.id,
    },
    select: { id: true, name: true },
  });

  return <h1>{account.name}</h1>;
};

export default AccountDetailsPage;
