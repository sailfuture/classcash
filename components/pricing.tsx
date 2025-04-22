"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export function Pricing() {
  return (
    <section className="relative py-20">
      <div className="mx-auto px-4 max-w-6xl flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Badge className="gap-1.5 bg-primary/10 text-primary">Pricing</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
            Teacher Friendly Pricing
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
          Select the plan that best fits your classroom's needs and start transforming behaviors
          today.
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card className="shadow-none w-full">
            <CardContent className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-xl">Basic</h3>
              </div>
              <p className="text-muted-foreground text-base mt-2">
                Perfect for individual teachers
              </p>
              <div className="flex items-end gap-0.5 mt-5">
                <span className="font-bold text-4xl sm:text-5xl font-heading">$2.99</span>
                <span className="font-normal text-base mb-0.5">/month</span>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">1 Classroom</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">1 Teacher Account</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Behavior Tracking</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Reward System</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Basic Reporting</p>
                </div>
              </div>
              <Button variant="default" size="default" className="mt-5">
                Get Started
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-none w-full">
            <CardContent className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-xl">Pro</h3>
                <Badge variant="default" className="gap-1.5">
                  Most Popular
                </Badge>
              </div>
              <p className="text-muted-foreground text-base mt-2">
                Ideal for small schools or teams
              </p>
              <div className="flex items-end gap-0.5 mt-5">
                <span className="font-bold text-4xl sm:text-5xl font-heading">$9.99</span>
                <span className="font-normal text-base mb-0.5">/month</span>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Up to 5 Classrooms</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Up to 5 Teacher Accounts</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Behavior Tracking</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Reward System</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Advanced Reporting</p>
                </div>
              </div>
              <Button variant="default" size="default" className="mt-5">
                Get Started
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-none w-full">
            <CardContent className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-xl">Enterprise</h3>
              </div>
              <p className="text-muted-foreground text-base mt-2">
                For large schools and districts
              </p>
              <div className="flex items-end gap-0.5 mt-5">
                <span className="font-bold text-4xl sm:text-5xl font-heading">$99</span>
                <span className="font-normal text-base mb-0.5">/month</span>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Unlimited Classrooms</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Unlimited Teacher Accounts</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Custom Integrations</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Dedicated Support</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check" className="size-4 text-primary shrink-0" />
                  <p className="text-base text-foreground">Custom Branding</p>
                </div>
              </div>
              <Button variant="default" size="default" className="mt-5">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
