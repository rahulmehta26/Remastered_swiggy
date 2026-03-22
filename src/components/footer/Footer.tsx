import React from "react";
import { cn } from "../../utils/cn";
import Swiggy from "../icons/Swiggy";
import Text from "../ui/Text";
import { footerData } from "../../constant/footerData";
import { FooterColumn } from "./FooterColumn";
import { Divider } from "../ui/Divider";
import DownloadButton from "../ui/DownloadButton";
import Apple from "../icons/Apple";
import Playstore from "../icons/Playstore";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const column1 = footerData[0];
  const column2 = [footerData[1], footerData[3]];
  const column3 = footerData[2];
  const column4 = [footerData[4], footerData[5]];

  return (
    <footer className={cn("w-full h-full bg-light-gray py-10")}>
      <div className={cn("page-container", "grid grid-cols-12")}>
        <div className={cn("col-span-4")}>
          <div className={cn("flex items-center gap-2")}>
            <Swiggy className={cn("w-12 h-12")} />

            <Text
              as="p"
              className={cn(
                "text-primary text-3xl font-extrabold text-shadow-sm",
              )}
            >
              Swiggy
            </Text>
          </div>

          <Text as="p" className=" text-gray-700 font-semibold text-[0.9rem] ">
            {"\u00A9"} {year} Swiggy Limited
          </Text>
        </div>

        <div className="col-span-8 flex justify-between">
          <FooterColumn data={column1} />

          <div className="flex flex-col gap-8">
            {column2.map((item) => (
              <FooterColumn key={item.title} data={item} />
            ))}
          </div>

          <FooterColumn data={column3} />

          <div className="flex flex-col gap-8">
            {column4.map((item) => (
              <FooterColumn key={item.title} data={item} />
            ))}
          </div>
        </div>
      </div>

      <Divider />

      <div
        className={cn(
          "page-container",
          "flex justify-between items-center gap-24",
        )}
      >
        <Text
          as="h3"
          className={cn("text-neutral-700 text-2xl font-bold text-shadow-xs ")}
        >
          For better experience, download the Swiggy app now
        </Text>

        <div className={cn("flex flex-1 items-center gap-8")}>
          <a
            href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("decoration-0")}
          >
            <DownloadButton
              icon={Apple}
              iconStyle="w-12 h-12"
              title="App Store"
              subTitle="Download on the"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=in.swiggy.android"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("decoration-0")}
          >
            <DownloadButton
              icon={Playstore}
              iconStyle="w-12 h-12"
              title="Google Play"
              subTitle="Get it on"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
