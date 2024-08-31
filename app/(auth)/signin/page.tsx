"use client";
import Image from "next/image";
import Icons from "@/utils/icon";
import Link from "next/link";
import { signIn } from "next-auth/react";
const Page = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-4 bg-gray-900">
      <div className="flex flex-col gap-4 items-center">
        <Image
          src="/image.png"
          alt="Vercel Logo"
          width={72}
          height={16}
          className="rounded-xl"
        />
        <p className="text-3xl">
          Story<span className="text-red-400">Ai</span>
        </p>
        <button
          className="flex justify-center items-center gap-2 relative min-w-[360px] bg-black rounded-full pl-5  py-3"
          onClick={() => signIn()}
        >
          <Icons.mail className="w-6 h-6 mr-2 absolute left-4 text-gray-400" />
          <span className="text-lg">Sign in with an email</span>
        </button>
        <div className="bg-gray-400 h-[1px] w-full" />
        <span className="text-gray-500">
          Don’t have a StoryAi account? Then sign up.
        </span>
        <Link href={"/signup"}>
          <button className="flex justify-center items-center gap-2 relative min-w-[360px] bg-black rounded-full pl-5  py-3">
            <Icons.rightarrow className="w-6 h-6 mr-2 absolute left-4 text-gray-400" />
            <span className="text-lg">Sign up </span>
          </button>
        </Link>

        <div>
          <div className="flex justify-center items-center flex-col text-gray-500">
            <span className="flex justify-evenly items-center gap-2">
              {" "}
              <span className="hover:text-white transition-all cursor-pointer hover:underline">
                Privacy Policy
              </span>{" "}
              •
              <span className="hover:text-white transition-all cursor-pointer hover:underline">
                Terms and Conditions
              </span>
            </span>
            <span>Copyright © 2024 StoryAi. All rights reserved. </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
