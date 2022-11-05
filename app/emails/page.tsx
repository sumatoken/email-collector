import React from "react";
import { prisma } from "../../lib/prisma";
import { use } from "react";
import fs from "fs";

const getEmails = async () => {
  let emails = await prisma.emails
    .findMany({
      select: {
        email: true,
      },
    })
    .then((res) => res);
  emails.map((email, key) => {
    try {
      fs.writeFileSync("./emails.txt", `${email.email}\n`, { flag: "a+" });
    } catch (error) {
      console.log("error");
    }
  });
  return { emails };
};

export default function page() {
  let { emails } = use(getEmails());
  emails.map((email, key) => <div key={key}>{email.email}</div>);
}
