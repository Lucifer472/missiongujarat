"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { Input } from "../ui/input";
import { getBlogsForSearch } from "@/action/get-blog-for-live-search";

export const LiveBlogSearch = ({
  setField,
  initialValue,
}: {
  setField: (v: string | null) => void;
  initialValue: string | null;
}) => {
  const [data, setData] = useState("");
  const [url, setUrl] = useState<string | null>(null);
  const [value] = useDebounce(data, 1000);

  const [list, setList] = useState<null | { title: string; url: string }[]>(
    null
  );

  useEffect(() => {
    if (initialValue) {
      setUrl(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    console.log("It runs");
    getBlogsForSearch(value).then((d) => {
      setList(d);
    });
  }, [value]);

  useEffect(() => {
    setField(url);
  }, [url, setField]);

  return (
    <div className="relative w-full">
      <Input onChange={(e) => setData(e.target.value)} value={data} />
      {list && list.length > 0 && (
        <div className="absolute top-12 w-full bg-white p-4 rounded-md border-gray-100 border">
          {list.map((l) => (
            <div
              key={l.title}
              onClick={() => {
                setData(l.title);
                setUrl(l.url);
                setList(null);
              }}
              className="py-2 font-medium cursor-pointer hover:bg-sky-50 px-2 rounded-md"
            >
              {l.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
