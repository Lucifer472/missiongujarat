"use client";
import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import { FaqEditor } from "./FaqForm";
import Editor from "./Editor";

import { category } from "@/constant";
import { blog } from "@prisma/client";
import { blogSchema } from "@/schema";
import { LiveBlogSearch } from "./live-blog-search";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

// Main BLog section

const BlogEdit = ({
  values,
  blogData,
  id,
}: {
  values: blog;
  id: number;
  blogData: any;
}) => {
  const [data, setData] = useState<any>({
    time: 1719483963783,
    blocks: blogData,
    version: "2.29.1",
  });
  const indexValues = ["one", "two", "three"];

  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      category: values.category,
      description: values.description,
      title: values.title,
      faq: JSON.parse(values.faq as string),
      keywords: values.keywords,
      url: values.url,
      connect: values.connect,
      isIndex: values.isIndex,
      isPending: values.isPending === true ? "true" : "false",
      pageText: values.pageText === null ? "" : values.pageText,
    },
  });

  function onSubmit(values: z.infer<typeof blogSchema>) {
    console.log(data);
    fetch("/api/update", {
      method: "POST",
      body: JSON.stringify({ ...values, data, id }),
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("Network Response was not ok");
          throw new Error("Network response was not ok");
        }
        return response.json(); // This will parse the response as JSON
      })
      .then((data: any) => {
        if (data.status == 200) {
          toast.success("Blog Successfully updated!");
          form.reset();
        } else {
          toast.error(data.Message);
        }
      })
      .catch((e) => {
        toast.error(e);
      });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full pt-4 py-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title of the Blogs" {...field} />
              </FormControl>
              <FormDescription>This is the Title of the blog</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Url</FormLabel>
              <FormControl>
                <Input placeholder="Url of the Blogs" {...field} />
              </FormControl>
              <FormDescription>This is the Title of the Url</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Keywords</FormLabel>
              <FormControl>
                <Input placeholder="Keywords of the Blogs" {...field} />
              </FormControl>
              <FormDescription>
                This are the keywords of the blogs
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description of the Blogs" {...field} />
              </FormControl>
              <FormDescription>
                This are the Description of the blogs
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {category.map((l) => (
                      <SelectItem
                        key={l.link}
                        value={l.link}
                        className="capitalize"
                      >
                        {l.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Please Select Category of the Scholarship
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isPending"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                Pending or Not (Pending Blog Not Available without URL)
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value.toString()}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel className="font-normal">is Pending</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      is Not Pending
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isIndex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Index Page</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {indexValues.map((l) => (
                      <SelectItem key={l} value={l} className="capitalize">
                        {l}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Please Select Index for Page (default: One)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="connect"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Connect to Blog</FormLabel>
              <FormControl>
                <LiveBlogSearch
                  initialValue={values.connect}
                  setField={field.onChange}
                />
              </FormControl>
              <FormDescription>Connect to Next Page</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pageText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Page Text</FormLabel>
              <FormControl>
                {/* @ts-ignore */}
                <Input placeholder="Main Title" {...field} />
              </FormControl>
              <FormDescription>This is the Main Title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col w-full">
          <span className="pb-4 text-xl font-medium">Add Blog</span>
          <div className="w-full border border-slate-200 rounded-md px-10 py-8">
            <Editor setData={setData} initialData={data} />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span className="pb-4 text-xl font-medium">Add Faqs</span>
          <div className="w-full border border-slate-200 rounded-md px-10 py-8">
            <FaqEditor
              setValue={form.setValue}
              data={JSON.parse(values.faq as string)}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BlogEdit;
