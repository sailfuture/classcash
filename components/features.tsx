"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CardContent, Card } from "@/components/ui/card";
import placeholder from "@/public/images/placeholder.png";

export function Features() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col items-start gap-6">
        <div className="flex flex-col gap-3 items-start">
          <Badge className="gap-1.5 bg-primary/10 text-primary">Features</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance">
            Key Features of the Classroom Economy Toolkit
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl">
          Explore the core functionalities designed to transform your classroom into a thriving,
          positive learning environment.
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card className="shadow-none">
            <CardContent className="flex gap-4 flex-col items-start">
              <Image src={placeholder} alt="placeholder Image" className="rounded-md" />
              <h3 className="font-semibold text-lg">Customizable Reward Systems</h3>
              <p className="text-muted-foreground text-base">
                Tailor rewards to align with your classroom goals. Set up points, badges, and
                virtual currency to motivate students and recognize achievements.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex gap-4 flex-col items-start">
              <Image src={placeholder} alt="placeholder Image" className="rounded-md" />
              <h3 className="font-semibold text-lg">Behavior Tracking</h3>
              <p className="text-muted-foreground text-base">
                Monitor and track student behaviors with ease. Identify patterns, provide targeted
                support, and foster a culture of accountability.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex gap-4 flex-col items-start">
              <Image src={placeholder} alt="placeholder Image" className="rounded-md" />
              <h3 className="font-semibold text-lg">Digital Currency Management</h3>
              <p className="text-muted-foreground text-base">
                Manage a virtual economy within your classroom. Students can earn, save, and spend
                digital currency, learning valuable financial literacy skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
