"use client";

import * as z from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AllAdSchema } from "@/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateAds } from "@/action/ads-update";
import toast from "react-hot-toast";

const AdEditor = ({
  setValue,
  data,
  extra,
}: {
  setValue: any;
  data: {
    adId: string;
    label: string;
    sizeX: string;
    sizeY: string;
  }[];
  extra: any;
}) => {
  const [adData, setAdData] = useState(data);

  const handleChange = (
    adId: string,
    mainKey: "adId" | "label" | "sizeX" | "sizeY",
    value: string
  ) => {
    setAdData((prevData) => {
      const newData = [...prevData];
      const find = newData.findIndex((item) => item.adId === adId);
      if (find > -1) {
        newData[find][mainKey] = value;
      }
      return newData;
    });
  };

  useEffect(() => {
    setValue(adData);
  }, [setValue, adData]);

  return (
    <>
      {data.map((l, index) => (
        <div
          className="w-full flex flex-col items-start justify-start gap-y-4"
          key={extra[index].id}
        >
          <div>
            {extra[index].name} {index + 1}
          </div>
          <Input
            type="text"
            defaultValue={`${l.adId}`}
            placeholder="id"
            onChange={(e) => handleChange(l.adId, "adId", e.target.value)}
          />
          <Input
            type="text"
            defaultValue={`${l.label}`}
            placeholder="label"
            onChange={(e) => handleChange(l.adId, "label", e.target.value)}
          />
          <Input
            type="text"
            defaultValue={`${l.sizeX}`}
            placeholder="size X"
            onChange={(e) => handleChange(l.adId, "sizeX", e.target.value)}
          />
          <Input
            type="text"
            defaultValue={`${l.sizeY}`}
            placeholder="size Y"
            onChange={(e) => handleChange(l.adId, "sizeY", e.target.value)}
          />
        </div>
      ))}
    </>
  );
};

export const AdChangeForm = ({
  data,
}: {
  data: {
    adId: string;
    label: string;
    size: number[];
  }[];
}) => {
  const defaultValue = data.map((d) => ({
    adId: d.adId,
    label: d.label,
    sizeX: d.size[0].toString(),
    sizeY: d.size[1].toString(),
  }));

  const form = useForm<z.infer<typeof AllAdSchema>>({
    resolver: zodResolver(AllAdSchema),
    defaultValues: {
      ads: defaultValue,
    },
  });

  const onSubmit = (v: z.infer<typeof AllAdSchema>) => {
    updateAds(v).then((d) => {
      if (d.success) {
        toast.success("Ads Updated!");
      }
      if (d.error) {
        toast.error(d.error);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="ads"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AdEditor
                  extra={data}
                  data={defaultValue}
                  setValue={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full py-6">
          Submit Data
        </Button>
      </form>
    </Form>
  );
};
