import MaxwidthWraper from "@/components/MaxwidthWraper";
import { ArrowRight, Check,  Star } from "lucide-react";
import { Icons } from "@/components/icons";
import { Reviews } from "@/components/reviews";
import Phone from "@/components/phone";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="bg-slate-50 pt-44 pb-56 dark:bg-background">
        <MaxwidthWraper>
          <div className="flex flex-col lg:flex-row gap-14 justify-between items-center">
            <div className="relative flex flex-col gap-y-8 items-start justify-center">
              <div className="absolute -top-36 left-0 hidden lg:block">
                <img src="/snake-1.png" alt="Snake Image" className="w-28" />
                <div className="absolute inset-0 top-10 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
              </div>
              <h1 className="text-5xl font-bold text-center w-fit tracking-tight !leading-tight text-gray-900 dark:text-gray-500 md:text-6xl lg:text-7xl text-balance">
                Your Image on a{" "}
                <span className="text-white bg-primary">Custom</span> Phone Case
              </h1>
              <p className="text-center text-lg">
                Capture your favorite memories with your own,{" "}
                <span className="font-bold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="self-start my-10">
                <li className="flex items-center gap-x-3">
                  <Check className=" text-green-500" />
                  <p>High-quality, durable material</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <Check className=" text-green-500" />
                  <p>5 year print guarantee</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <Check className=" text-green-500" />
                  <p>Modern iPhone models supported</p>
                </li>
              </ul>

              <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                <div className="flex -space-x-2">
                  <img
                    src={"/users/user-1.png"}
                    alt="happy customer"
                    className="rounded-full w-10 h-10 ring-2 ring-slate-200"
                  />

                  <img
                    src={"/users/user-2.png"}
                    alt="happy customer"
                    className="rounded-full w-10 h-10 ring-2 ring-slate-200"
                  />

                  <img
                    src={"/users/user-3.png"}
                    alt="happy customer"
                    className="rounded-full w-10 h-10 ring-2 ring-slate-200"
                  />

                  <img
                    src={"/users/user-4.jpg"}
                    alt="happy customer"
                    className="rounded-full w-10 h-10 ring-2 ring-slate-200"
                  />

                  <img
                    src={"/users/user-5.jpg"}
                    alt="happy customer"
                    className="rounded-full w-10 h-10 ring-2 ring-slate-200"
                  />
                </div>

                <div>
                  <div className="flex gap-0.5 items-center justify-center md:justify-start">
                    <Star className="w-4 h-4 fill-green-600 text-green-600" />
                    <Star className="w-4 h-4 fill-green-600 text-green-600" />
                    <Star className="w-4 h-4 fill-green-600 text-green-600" />
                    <Star className="w-4 h-4 fill-green-600 text-green-600" />
                    <Star className="w-4 h-4 fill-green-600 text-green-600" />
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
                className="w-40 lg:w-52 absolute z-[70] top-[14px] left-[273px] hidden md:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt="lined image covering corner of Mobile Case"
                className="w-20 absolute -bottom-4 -left-6 z-[60]"
              />
              <div className="relative w-64 z-50 pointer-events-none ">
                <img
                  src="/phone-template-white-edges.png"
                  alt="Mobile Case"
                  className="pointer-events-none select-none"
                />
                <img
                  src="/testimonials/1.jpg"
                  alt="dog image in Case"
                  className="absolute object-cover min-w-full min-h-full -z-10 inset-0"
                />
              </div>
            </div>
          </div>
        </MaxwidthWraper>
      </section>

      <section className="bg-slate-100 grainy-dark py-24">
        <MaxwidthWraper>
          {" "}
          <div className="flex flex-col items-center gap-y-28">
            <div className="flex flex-col lg:flex-row-reverse gap-y-6 md:gap-x-10 items-center">
              <img src="/snake-2.png" alt="Snake Image" className="w-28" />
              <div>
                <h2 className="text-5xl md:text-6xl !leading-tight tracking-tight text-center text-balance font-bold text-gray-900">
                  What our
                  <span className="relative">
                    {" "}
                    customers
                    {/* will be hidden on < 640px(sm)*/}
                    <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
                  </span>{" "}
                  say
                </h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-16 lg:gap-x-10">
              <div className="flex flex-col items-start gap-y-8">
                <div className="flex gap-0.5 items-center justify-center md:justify-start">
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                </div>

                <p className="text-lg leading-8 text-justify">
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="text-white bg-slate-800">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."
                </p>

                <div className="flex items-center gap-x-6">
                  <img
                    src="/users/user-1.png"
                    alt="customer Image"
                    className="rounded-full w-12 h-12"
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
                <div className="flex gap-0.5 items-center justify-center md:justify-start">
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                </div>

                <p className="text-lg leading-8 text-justify">
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="text-white bg-slate-800">
                    looks brand new after about half a year
                  </span>{" "}
                  looks brand new after about half a year. I dig it."
                </p>

                <div className="flex items-center gap-x-6">
                  <img
                    src="/users/user-4.jpg"
                    alt="customer Image"
                    className="rounded-full w-12 h-12"
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

      <section className="py-24 bg-[#F5F7F9]">
        <MaxwidthWraper>
          <h2 className="text-5xl lg:text-6xl tracking-tight !leading-tight text-balance text-center my-8 font-bold text-gray-900">
            Upload your photo and get{" "}
            <span className="bg-green-600 text-white">your own case</span> now
          </h2>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <img
              src="/horse.jpg"
              alt="Horse"
              className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-[25rem] md:h-full w-80"
            />
            <img
              src="/arrow.png"
              alt="arrow"
              className="rotate-[100deg] md:rotate-[0deg] my-10"
            />
            <Phone imgSrc="/horse_phone.jpg" className="w-60" />
          </div>
          <ul className="mx-auto w-fit flex flex-col gap-y-2 my-14">
            <li className="flex gap-x-2 items-center">
              <Check className=" text-green-600 w-5 h-5" />
              <p className="sm:text-lg">High-quality silicone material</p>
            </li>
            <li className="flex gap-x-2 items-center">
              <Check className=" text-green-600 w-5 h-5" />
              <p className="sm:text-lg">
                Scratch- and fingerprint resistant coating
              </p>
            </li>
            <li className="flex gap-x-2 items-center">
              <Check className=" text-green-600 w-5 h-5" />
              <p>5 year print warranty</p>
            </li>
            <li className="flex gap-x-2 items-center">
              <Check className=" text-green-600 w-5 h-5" />
              <p>Wireless charging compatible</p>
            </li>
          </ul>
          <Button className="flex items-center self-center text-white mx-auto md:py-4">
            Create your own case now
            <ArrowRight />
          </Button>
        </MaxwidthWraper>
      </section>
    </main>
  );
}
