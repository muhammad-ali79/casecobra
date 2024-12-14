import MaxwidthWraper from "@/components/MaxwidthWraper";
import { ArrowRight, Check, Star } from "lucide-react";
import { icons } from "@/components/icons";
import { Reviews } from "@/components/Reviews";
import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {" "}
      <section className="bg-slate-50 pb-56 pt-44 dark:bg-background">
        <MaxwidthWraper>
          <div className="flex flex-col items-center justify-between gap-14 lg:flex-row">
            <div className="relative flex flex-col items-start justify-center gap-y-8">
              <div className="absolute -top-36 left-0 hidden lg:block">
                <img src="/snake-1.png" alt="Snake Image" className="w-28" />
                <div className="absolute inset-0 top-10 h-28 bg-gradient-to-t from-slate-50 via-slate-50/50" />
              </div>
              <h1 className="w-fit text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 dark:text-gray-500 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-primary text-white">Custom</span> Phone Case
              </h1>
              <p className="text-center text-lg">
                Capture your favorite memories with your own,{" "}
                <span className="font-bold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="my-10 self-start">
                <li className="flex items-center gap-x-3">
                  <Check className="text-green-500" />
                  <p>High-quality, durable material</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <Check className="text-green-500" />
                  <p>5 year print guarantee</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <Check className="text-green-500" />
                  <p>Modern iPhone models supported</p>
                </li>
              </ul>

              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
                <div className="flex -space-x-2">
                  <img
                    src={"/users/user-1.png"}
                    alt="happy customer"
                    className="h-10 w-10 rounded-full ring-2 ring-slate-200"
                  />

                  <img
                    src={"/users/user-2.png"}
                    alt="happy customer"
                    className="h-10 w-10 rounded-full ring-2 ring-slate-200"
                  />

                  <img
                    src={"/users/user-3.png"}
                    alt="happy customer"
                    className="h-10 w-10 rounded-full ring-2 ring-slate-200"
                  />

                  <img
                    src={"/users/user-4.jpg"}
                    alt="happy customer"
                    className="h-10 w-10 rounded-full ring-2 ring-slate-200"
                  />

                  <img
                    src={"/users/user-5.jpg"}
                    alt="happy customer"
                    className="h-10 w-10 rounded-full ring-2 ring-slate-200"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-center gap-0.5 md:justify-start">
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  </div>

                  <p>
                    <span className="font-bold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/your-image.png"
                alt="arrow pointing to the dog in Case"
                className="absolute left-[273px] top-[14px] z-[70] hidden w-40 md:block lg:hidden lg:w-52 xl:block"
              />
              <img
                src="/line.png"
                alt="lined image covering corner of Mobile Case"
                className="absolute -bottom-4 -left-6 z-[60] w-20"
              />

              <Phone imgSrc="/testimonials/1.jpg" className="w-60" />
            </div>
          </div>
        </MaxwidthWraper>
      </section>
      <section className="grainy-dark bg-slate-100 py-24">
        <MaxwidthWraper>
          {" "}
          <div className="flex flex-col items-center gap-y-28">
            <div className="flex flex-col items-center gap-y-6 md:gap-x-10 lg:flex-row-reverse">
              <img src="/snake-2.png" alt="Snake Image" className="w-28" />
              <div>
                <h2 className="text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
                  What our
                  <span className="relative">
                    {" "}
                    customers
                    {/* will be hidden on < 640px(sm)*/}
                    <icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-500 sm:block" />
                  </span>{" "}
                  say
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-start gap-y-16 lg:flex-row lg:items-center lg:gap-x-10">
              <div className="flex flex-col items-start gap-y-8">
                <div className="flex items-center justify-center gap-0.5 md:justify-start">
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                </div>

                <p className="text-justify text-lg leading-8">
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."
                </p>

                <div className="flex items-center gap-x-6">
                  <img
                    src="/users/user-1.png"
                    alt="customer Image"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-semibold">Jonathan</p>
                    <div className="flex gap-x-3">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm text-zinc-600">
                        Verified Purchase
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-y-8">
                <div className="flex items-center justify-center gap-0.5 md:justify-start">
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                  <Star className="h-5 w-5 fill-green-600 text-green-600" />
                </div>

                <p className="text-justify text-lg leading-8">
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>{" "}
                  looks brand new after about half a year. I dig it."
                </p>

                <div className="flex items-center gap-x-6">
                  <img
                    src="/users/user-4.jpg"
                    alt="customer Image"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-semibold">Josh</p>
                    <div className="flex gap-x-3">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm text-zinc-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxwidthWraper>
        {/* grid animation */}
        <div className="mt-18">
          <Reviews />
        </div>
      </section>
      <section className="bg-[#F5F7F9] py-24">
        <MaxwidthWraper>
          <h2 className="my-8 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 lg:text-6xl">
            Upload your photo and get{" "}
            <span className="bg-green-600 text-white">your own case</span> now
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <img
              src="/horse.jpg"
              alt="Horse"
              className="h-[25rem] w-80 rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10 md:h-full"
            />
            <img
              src="/arrow.png"
              alt="arrow"
              className="my-10 rotate-[100deg] md:rotate-[0deg]"
            />
            <Phone imgSrc="/horse_phone.jpg" className="w-60" />
          </div>
          <ul className="mx-auto my-14 flex w-fit flex-col gap-y-2">
            <li className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <p className="sm:text-lg">High-quality silicone material</p>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <p className="sm:text-lg">
                Scratch- and fingerprint resistant coating
              </p>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <p>5 year print warranty</p>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="h-5 w-5 text-green-600" />
              <p>Wireless charging compatible</p>
            </li>
          </ul>
          <Button className="mx-auto flex items-center self-center text-white md:py-4">
            <Link href={"/configure/upload"} className="text-xs text-white">
              Create your own case
            </Link>
            <ArrowRight />
          </Button>
        </MaxwidthWraper>
      </section>
    </div>
  );
}
