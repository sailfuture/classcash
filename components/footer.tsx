"use client";

import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto px-4 max-w-6xl grid grid-cols-2 sm:grid-cols-3 gap-10 md:grid-cols-5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Icon
              icon="solar:bolt-circle-bold-duotone"
              className="text-primary size-7 [&>path:first-child]:opacity-100 [&>path:last-child]:fill-white rounded-full"
            />
            <span className="font-heading text-xl font-extrabold">Logo</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/ClassroomEconomyToolkit">
              <Icon icon="mdi:facebook" className="size-5" />
            </a>
            <a href="https://twitter.com/ClassroomEconomyToolkit">
              <Icon icon="mdi:twitter" className="size-5" />
            </a>
            <a href="https://www.instagram.com/ClassroomEconomyToolkit">
              <Icon icon="mdi:instagram" className="size-5" />
            </a>
            <a href="https://www.linkedin.com/company/ClassroomEconomyToolkit">
              <Icon icon="mdi:linkedin" className="size-5" />
            </a>
            <a href="https://www.youtube.com/channel/ClassroomEconomyToolkit">
              <Icon icon="mdi:youtube" className="size-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm">Resources</h3>
          <a className="text-muted-foreground text-sm hover:text-foreground">Blog</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Newsletter</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Events</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Tutorials</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Support</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm">Use cases</h3>
          <a className="text-muted-foreground text-sm hover:text-foreground">Startups</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Enterprise</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Government</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Marketplaces</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Ecommerce</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm">Social</h3>
          <a className="text-muted-foreground text-sm hover:text-foreground">Twitter</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">LinkedIn</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">Facebook</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">GitHub</a>
          <a className="text-muted-foreground text-sm hover:text-foreground">AngelList</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm"></h3>
          <a className="text-muted-foreground text-sm hover:text-foreground"></a>
          <a className="text-muted-foreground text-sm hover:text-foreground"></a>
          <a className="text-muted-foreground text-sm hover:text-foreground"></a>
          <a className="text-muted-foreground text-sm hover:text-foreground"></a>
          <a className="text-muted-foreground text-sm hover:text-foreground"></a>
        </div>
      </div>
    </footer>
  );
}
