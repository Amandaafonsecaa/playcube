import React from "react";
import Button from "./ui/button";

interface ReviewProps {
  review: any[];
  type: "movie" | "tv";
}

export default function Review({ review, type }: ReviewProps) {
  if (!review.length)
    return null;
  return (
    <section className="p-[3rem] bg-brand-beige  py-12 px-4 md:px-16 lg:px-24">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-bold text-brand-blue pl-[4rem]">Review</h2>
        <Button 
        text="Ver mais"/>
      </div>
      <div className="flex items-center justify-center gap-[4rem]">
        {review.slice(0, 2).map((r) => (
          <article
            key={r.id}
            className=" w-[610px] rounded-[1rem] p-[1.4rem] bg-brand-beigeSoft flex items-center "
          >
            <div className="  space-y-3 ">
              <div>
                <p className="text-l leading-relaxed">
                  {r.content?.length > 500
                    ? r.content.slice(0, 500) + "…"
                    : r.content}
                </p>
              </div>
              <div className="flex justify-between">

                <div className="">
                  <p>
                    por <span style={{ fontWeight: "600" }}>{r.author}</span>
                  </p>
                  <p>{r.date}</p>
                </div>

                <div>
                  {r.author_details?.rating != null && (
                    <div className="text-l opacity-70">
                      Nota: {r.author_details.rating}/10
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
