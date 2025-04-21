"use client";

import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative py-36">
      <div className="container flex flex-col gap-6 items-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
          Transform Your Classroom Today
        </h2>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
          Implement a classroom economy that boosts student engagement, rewards positive behaviors,
          and cultivates essential soft skills. Sign up for a free trial and see the difference!
        </p>
        <div>
          <Button variant="default" size="default">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
