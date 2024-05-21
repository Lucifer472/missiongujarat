"use client";
import Image from "next/image";
import { Ad1, Ad2, Ad3, LargeAd } from "../ads/ads";

const BlogGen = ({ blog }: { blog: any }) => {
  const adElement1 = {
    type: "Ad",
    data: LargeAd,
  };

  const adElement2 = {
    type: "Ad",
    data: Ad3,
  };

  const adElement3 = {
    type: "Ad",
    data: Ad2,
  };

  const adElement4 = {
    type: "Ad",
    data: Ad1,
  };

  blog.splice(1, 0, adElement1);
  blog.splice(4, 0, adElement2);
  blog.splice(7, 0, adElement3);
  blog.splice(10, 0, adElement4);

  return (
    <div className="padding flex flex-col items-start justify-center gap-y-1 max-w-full xxs:max-w-[400px] xs:max-w-[500px] sm:max-[600px] md:max-w-[750px] mx-auto prose blog-styles ">
      {
        // @ts-ignore
        blog.map((b: any, index) => {
          switch (b.type) {
            case "paragraph":
              return (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: b.data.text }}
                />
              );
            case "image":
              return (
                <Image
                  width={750}
                  height={750}
                  src={b.data.file.url}
                  alt={b.id}
                  key={index}
                  style={{ objectFit: "contain" }}
                />
              );
            case "header":
              switch (b.data.level) {
                case 1:
                  return (
                    <h1
                      key={index}
                      id={b.id}
                      dangerouslySetInnerHTML={{ __html: b.data.text }}
                    />
                  );
                case 2:
                  return (
                    <h2
                      key={index}
                      id={b.id}
                      dangerouslySetInnerHTML={{ __html: b.data.text }}
                    />
                  );
                case 3:
                  return (
                    <h3
                      key={index}
                      id={b.id}
                      dangerouslySetInnerHTML={{ __html: b.data.text }}
                    />
                  );
                case 4:
                  return (
                    <h4
                      key={index}
                      id={b.id}
                      dangerouslySetInnerHTML={{ __html: b.data.text }}
                    />
                  );
                case 5:
                  return (
                    <h6
                      key={index}
                      id={b.id}
                      dangerouslySetInnerHTML={{ __html: b.data.text }}
                    />
                  );
                default:
                  return (
                    <h6
                      key={index}
                      id={b.id}
                      dangerouslySetInnerHTML={{ __html: b.data.text }}
                    />
                  );
              }
            case "list":
              if (b.data.style === "unordered") {
                return (
                  <ul key={index}>
                    {b.data.items.map((list: any, listIndex: any) => (
                      <li
                        key={listIndex}
                        dangerouslySetInnerHTML={{ __html: list }}
                      />
                    ))}
                  </ul>
                );
              } else {
                return (
                  <ol key={index}>
                    {b.data.items.map((list: any, listIndex: any) => (
                      <li
                        key={listIndex}
                        dangerouslySetInnerHTML={{ __html: list }}
                      />
                    ))}
                  </ol>
                );
              }
            case "quote":
              return (
                <blockquote
                  key={index}
                  dangerouslySetInnerHTML={{ __html: b.data.text }}
                />
              );
            case "table":
              let l = true;
              return (
                <div
                  className="max-w-full sm:max-w-[750px] overflow-x-scroll sm:overflow-hidden mx-auto"
                  key={index}
                >
                  <table>
                    <tbody>
                      {b.data.content.map((table: any, tableIndex: any) => {
                        return (
                          <tr key={tableIndex}>
                            {l
                              ? table.map((t: any, colIndex: any) => {
                                  l = false;
                                  return (
                                    <th
                                      key={colIndex}
                                      dangerouslySetInnerHTML={{ __html: t }}
                                    />
                                  );
                                })
                              : table.map((t: any, colIndex: any) => (
                                  <td
                                    key={colIndex}
                                    dangerouslySetInnerHTML={{ __html: t }}
                                  />
                                ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            case "Ad":
              return <b.data key={index} />;
            default:
              return null;
          }
        })
      }
    </div>
  );
};

export default BlogGen;
