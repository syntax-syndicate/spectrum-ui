"use client";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icon";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { SheetClose } from "@/components/ui/sheet";
import Search from "./search";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

export const NAVLINKS = [
  {
    title: "Docs",
    href: "/docs",
  },

  {
    title: "Examples",
    href: "/examples",
  },
  {
    title: "Colors",
    href: "/colors",
  },
  {
    title: "Gift a Component",
    href: "/giftacomponent",
  },
];

export function Navbar() {
  const [star, setStar] = useState(0);
  const fetchGithubData = () => {
    axios
      .get("https://api.github.com/repos/arihantcodes/spectrum-ui")
      .then((response) => {
        const star = response.data.stargazers_count;
        setStar(star);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
      });
  };

  useEffect(() => {
    fetchGithubData();
  }, []);
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-8">
            <div className="sm:flex ">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="md:block hidden">
              <Link href="https://github.com/arihantcodes/spectrum-ui">
              <Button
                className="gap-4 rounded-2xl"
                variant={"secondary"}
                size={"lg"}
              >
                <Icons.gitHub className="icon-class w-4 " />
                Give a Star ⭐  {star}
              </Button>
            </Link>
              </div>
              <div className="hidden md:flex">
                <Search />
              </div>
              <div>
                <Link
                  href="https://github.com/arihantcodes/spectrum-ui"
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                >
                  <Icons.gitHub className="icon-class w-4" />
                </Link>
                <Link
                  href="https://x.com/arihantcodes"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  <Icons.twitter className="icon-class w-3" />
                </Link>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Icons.logo className="icon-class w-2" />

      <h2 className="text-base md:text-lg font-bold">Spectrum UI</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
