"use client";

import * as z from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AllAdSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AdEditor = ({
  setValue,
  data,
}: {
  setValue: any;
  data: {
    id: string;
    label: string;
    size: number[];
  }[];
}) => {
  const [adData, setAdData] = useState(data);

  const handleChange = (
    id: string,
    changedId: string,
    label: string,
    sizeX: string,
    sizeY: string
  ) => {
    setAdData((prevData) => {
      const newData = [...prevData];
      const find = newData.findIndex((item) => item.id === id);
      if (find > 0) {
        newData[find] = {
          id: changedId,
          label: label,
          size: [parseInt(sizeX), parseInt(sizeY)],
        };
      }
      return newData;
    });
  };

  useEffect(() => {
    setValue("ads", JSON.stringify(adData));
  }, [setValue, adData]);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-y-4">
      <div className="flex items-center justify-between w-full mb-4 px-2">
        <h2 className="text-lg font-semibold">Add FAQ</h2>
      </div>
      {data.map((l) => (
        <div
          key={l.id}
          className="flex flex-col items-start justify-start w-full gap-y-2"
        >
          {/* <Input
            type="text"
            defaultValue={`${l.id}`}
            placeholder="Question"
            onChange={(e) => handleChange(l.id, "question")}
          />
          <Textarea
            placeholder="Answer"
            defaultValue={`${l.label}`}
            onChange={(e) => handleChange(l, "answer", e.target.value)}
          /> */}
        </div>
      ))}
    </div>
  );
};

export const AdChangeForm = ({
  data,
}: {
  data: {
    id: string;
    label: string;
    size: number[];
  }[];
}) => {
  const defaultValue = data.map((d) => ({
    id: d.id,
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
    console.log(v);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="ads"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ad Change Data</FormLabel>
              <FormControl></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
