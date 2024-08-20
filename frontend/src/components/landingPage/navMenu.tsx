import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "#",
    description:
      "Learn more about our mission and the team behind our platform.",
  },
  {
    title: "Why Choose Us",
    href: "#whyChooseUs",
    description:
      "Discover the unique benefits of choosing our platform for all your service needs.",
  },
  {
    title: "Newsletter",
    href: "#newsletter",
    description: "Stay updated with our latest news and exclusive offers.",
  },
  {
    title: "Help & Support",
    href: "#",
    description:
      "Get assistance and answers to all your questions with our dedicated support team.",
  },
  {
    title: "Terms & Conditions",
    href: "#",
    description: "Understand the rules and guidelines for using our platform.",
  },
  {
    title: "Privacy Policy",
    href: "#",
    description: "Learn how we protect and use your personal information.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none bg-[#c5cedace]  flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium ">Logo</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your go-to platform for connecting with skilled
                      professionals for all your needs, whether you're seeking
                      services or offering them.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#" title="Become a worker">
                Join our community and start offering your services today.
              </ListItem>
              <ListItem href="#" title="Find an Expert">
                Connect with skilled professionals for any service you need.
              </ListItem>
              <ListItem href="#howItWorks" title="How it Works">
                Learn about our simple process for finding and hiring service
                providers.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              All Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
