import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { prisma } from "../../lib/prisma";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const emails = await prisma.emails.findMany({
    select: {
      email: true,
    },
  });

  console.log("emails", emails);
  return;
}
