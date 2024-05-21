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

import Editor from "./Editor";
import { FaqEditor } from "./FaqForm";

import { category } from "@/constant";
import { blogSchema } from "@/schema";

const BlogForm = () => {
  const [data, setData] = useState<any>({});
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      url: "",
      faq: "",
      keywords: "",
      description: "",
      category: category[0].link,
    },
  });

  function onSubmit(values: z.infer<typeof blogSchema>) {
    fetch("/api/addBlog", {
      method: "POST",
      body: JSON.stringify({ ...values, data }),
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
          toast.success("Blog Successfully Created!");
          form.reset();
        } else {
          console.log(data);
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
        <div className="flex flex-col w-full">
          <span className="pb-4 text-xl font-medium">Add Blog</span>
          <div className="w-full border border-slate-200 rounded-md px-10 py-8">
            <Editor setData={setData} />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <FaqEditor setValue={form.setValue} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BlogForm;
