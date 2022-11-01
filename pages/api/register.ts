import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, group } = req.body;
  if (req.method === "POST") {
    try {
      const result = await prisma.emails.create({
        data: {
          email,
          group,
        },
      });
      res.status(200).json({ message: "Enregistré avec succès" });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          res.status(403).json({ error: "Vous êtes déjà inscrit" });
        }
      }
      throw e;
    }
  }
}
