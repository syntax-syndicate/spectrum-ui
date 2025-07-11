import { Metadata } from "next";
import Link from "next/link";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tailwind Colors",
  description: "All colors in all formats.",
};

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Tailwind Colors</PageHeaderHeading>
        <PageHeaderDescription>
          Tailwind CSS colors in HSL, RGB, and HEX formats.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#colors">Browse Colors</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs">Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <section id="charts" className="scroll-mt-20">
        {children}
      </section>
    </div>
  );
}
