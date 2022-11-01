import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, group } = req.body;
  if (req.method === "POST") {
    const result = await prisma.emails.create({
      data: {
        email,
        group,
      },
    });
    res.status(200).json(result);
  } else {
    return;
  }
  /*  if (email === null || group === null) {
    res.json({ status: "405" });
  }
 
 */
}
