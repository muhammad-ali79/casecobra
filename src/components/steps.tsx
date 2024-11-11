"use client";

import React from "react";
import MaxwidthWraper from "./MaxwidthWraper";
import { usePathname } from "next/navigation";

// array is static(data does not chagne)
// so thats why place outside of component
const STEPS = [
  {
    url: "/upload",
    title: "Step 1: Add image",
    desc: "Choose an image for your case",
  },
  {
    url: "/design",
    title: "Step 2: Customize design",
    desc: "Make the case yours",
  },
  {
    url: "/preview",
    title: "Step 3: Summary",
    desc: "Review your final design",
  },
];

function Steps() {
  const pathName = usePathname();

  return (
    <div>
      <MaxwidthWraper>
        <ul className="bg-white flex flex-col lg:flex-row ">
          {STEPS.map((step, i) => {
            const isCurrent = pathName.endsWith(step.url);

            // take two arrays after Current Step and check with
            // url that any of them mathces with url.
            // but even though step(index) for which we want to compute
            // isCompleted is not included in array, but if ture comes than
            // the step(index) which is not included will be marked as isCompleted.
            // because its not about Step(object/index) is included or not in the array. its about for which step we are computing isCompleted
            const isCompleted = STEPS.slice(i + 1).some((step) =>
              pathName.endsWith(step.url)
            );

            const imgUrl = `snake-${i + 1}.png`;

            return (
              <li className="relative" key={step.title}>
                {
                  <div>
                    {/*make h-1 and w-full to span div across y-axis on lg*/}
                    <div
                      className={`h-full w-1 absolute left-0 lg:bottom-0 lg:w-full lg:h-1 ${
                        isCompleted ? "bg-green-500" : ""
                      } ${isCurrent ? "bg-zinc-700" : "bg-zinc-400"}`}
                    ></div>
                    <div className="px-8 py-4 flex items-center gap-x-4">
                      <img
                        src={`/${imgUrl}`}
                        alt="Snake Image"
                        className="w-16"
                      />
                      <div className="flex flex-col items-start gap-y-1">
                        <h5
                          className={`text-sm font-semibold ${
                            isCompleted ? "text-green-500" : ""
                          }text-zinc-700`}
                        >
                          {step.title}
                        </h5>
                        <p className="text-sm text-zinc-500">{step.desc}</p>
                      </div>
                    </div>
                    {i !== 0 ? (
                      <div className="absolute hidden lg:block inset-0 min-h-full w-3">
                        <svg
                          className="h-full w-full text-gray-300"
                          viewBox="0 0 12 82"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0.5 0V31L10.5 41L0.5 51V82"
                            stroke="currentcolor"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                }
              </li>
            );
          })}
        </ul>
      </MaxwidthWraper>
    </div>
  );
}

export default Steps;
