"use client";

import { Badge, Button } from "@/components/ui";
import { Icon } from "@iconify/react";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.png";

export function Hero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 size-full -z-10">
        <svg
          aria-hidden="true"
          className="fill-foreground/15 pointer-events-none absolute inset-0 size-full -z-10"
        >
          <defs>
            <pattern
              id="dot-pattern"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
              x="0"
              y="0"
            >
              <circle id="pattern-circle" cx="10" cy="10" r="1.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#dot-pattern)" />
        </svg>
        <div className="absolute inset-0 size-full bg-radial-[at_50%_50%] from-transparent via-background/5 to-background via-70% to-95%" />
      </div>
      <div className="container flex flex-col gap-6 items-center">
        <Badge className="bg-primary/10 text-primary gap-2 pl-0.5">
          <Badge className="text-xs font-medium rounded-sm">Popular</Badge>
          Featured
          <Icon icon="lucide:chevron-right" className="size-4" />
        </Badge>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl max-w-2xl text-balance text-center">
          Transform Your Classroom with a Digital Economy
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl text-balance text-center">
          Empower students, reward positive behavior, and foster a thriving learning environment
          with our customizable toolkit.
        </p>
        <div>
          <Button variant="default" size="default">
            Start Your Free Trial
          </Button>
        </div>
        <Image
          src={placeholder}
          alt="placeholder Image"
          className="rounded-md mt-4 max-w-4xl w-full"
        />
      </div>
    </section>
  );
}
