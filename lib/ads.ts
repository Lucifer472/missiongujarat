import { db } from "./db";

export const getAds = async () => {
  try {
    const ads = await db.ads.findMany({
      take: 11,
      orderBy: {
        id: "asc",
      },
    });

    return { success: ads };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
