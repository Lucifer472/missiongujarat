"use server";

import { db } from "@/lib/db";

export const getAllAdsFromServer = async () => {
  return await db.ads.findMany({
    take: 11,
    orderBy: {
      id: "asc",
    },
  });
};
