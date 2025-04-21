"use client";

import { Badge } from "@/components/ui/badge";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";

export function Testimonial() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Badge className="gap-1.5 bg-primary/10 text-primary">Testimonials</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
            Hear from Teachers
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
          Discover how the Classroom Economy Toolkit is transforming classrooms, boosting student
          engagement, and fostering positive behavior.
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Sarah Smith</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">
                    5th Grade Teacher, Maplewood Elementary
                  </p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                Since implementing the toolkit, I've seen a remarkable improvement in student
                behavior and participation. It's a game-changer!
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">John Doe</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">
                    High School Teacher, Oakwood High
                  </p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                The toolkit has made classroom management so much easier. Students are more engaged
                and take ownership of their learning.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Paul Johnson</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">
                    Middle School Teacher, Pine Ridge Middle
                  </p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                I love how customizable the toolkit is. I can tailor it to fit my classroom's
                specific needs and goals.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">
                    Michael Brown
                  </h4>
                  <p className="text-muted-foreground text-base leading-none text-center">
                    Elementary School Teacher, Willow Creek
                  </p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                The positive reinforcement system has created a more supportive and encouraging
                classroom environment.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Olivia Smith</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">
                    6th Grade Teacher, Riverview School
                  </p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                My students are more motivated to participate and collaborate. The toolkit has truly
                transformed my classroom.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">
                    Emily Johnson
                  </h4>
                  <p className="text-muted-foreground text-base leading-none text-center">
                    High School Teacher, Northwood Academy
                  </p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                I've seen a significant decrease in disciplinary issues and a huge increase in
                student engagement. Highly recommend!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
