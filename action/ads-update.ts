"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { AllAdSchema } from "@/schema";
import getCurrentUser from "@/lib/user-util";

export const updateAds = async (data: z.infer<typeof AllAdSchema>) => {
  const validatedData = AllAdSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: "Invalid Fields!" };
  }

  const user = await getCurrentUser();
  if (user === null) {
    return { error: "Please Login Again!" };
  }

  try {
    for (let i = 0; i < validatedData.data.ads.length; i++) {
      await db.ads.update({
        where: {
          id: i + 1,
        },
        data: {
          adId: validatedData.data.ads[i].adId,
          label: validatedData.data.ads[i].label,
          size: [
            Number(validatedData.data.ads[i].sizeX),
            Number(validatedData.data.ads[i].sizeY),
          ],
        },
      });
    }
    return { success: "All Fields Updated!" };
  } catch (error) {
    return { error: "something went wrong!" };
  }
};
