/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getAbout, getWorks } from "@/src/app/_lib/data-services";
import Image from "next/image";
import viewbg from "@/public/assets/img/viewm.jpg";
import proj from "@/public/assets/img/proj.jpg";
import collab from "@/public/assets/img/collab.jpg";
import team from "@/public/assets/img/team.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { STRAPI_URL } from "@/src/app/_lib/utils";

export default async function Page() {
  const aboutsData = await getAbout();
  const worksData = await getWorks();
  const works = worksData?.data;
  const about = aboutsData?.data;
  const imageUrl = about?.attributes?.image?.data?.attributes?.url || "";
  const fullImageUrl = `${STRAPI_URL}${imageUrl}`;
  
  return (
    <>
      <section className="h-[50vh] pb-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={viewbg}
            alt="Nomeo Logo Animation"
            layout="fill"
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="relative max-w-7xl mx-auto h-full flex items-center  z-10">
          <div className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6 px-7 text-left">
            <h1 className="title-font text-white mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl ">
              Interlink
            </h1>
            <p className="text-white ">{about?.attributes.slogan}</p>
          </div>
        </div>
        
      </section>

      {/* <About Works={works} /> */}

      <section className="my-32 container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left column with text */}
          <div className="lg:w-1/2">
            <h2 className="title-font bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl">
              Notre histoire
            </h2>

            {about && (
              <>
                <div className="text-justify py-5">
                  {Array.isArray(about?.attributes?.content) &&
                    about.attributes.content.length > 0 &&
                    about.attributes.content.map((item: any, index: any) => {
                      switch (item.type) {
                        case "heading":
                          const HeadingTag = `h${item.level}` as keyof React.JSX.IntrinsicElements;
                          return (
                            <HeadingTag
                              key={index}
                              className="title-font text-center pt-4 text-primary mb-4 text-xl font-bold leading-10 tracking-tight sm:text-3xl"
                              style={{
                                fontWeight: item.children.some(
                                  (child: any) => child.bold
                                )
                                  ? "bold"
                                  : "normal",
                              }}
                            >
                              {item.children.map((child: any, childIndex: any) => {
                                if (child.type === "text") {
                                  return (
                                    <React.Fragment key={childIndex}>
                                      {child.text}
                                    </React.Fragment>
                                  );
                                }
                                return null;
                              })}
                            </HeadingTag>
                          );
                        case "paragraph":
                          return (
                            <p key={index} className="py-2">
                              {item.children.map((child: any, childIndex: any) => {
                                if (child.type === "text") {
                                  return (
                                    <span
                                      key={childIndex}
                                      style={{
                                        fontWeight: child.bold
                                          ? "bold"
                                          : "normal",
                                      }}
                                    >
                                      {child.text}
                                    </span>
                                  );
                                }
                                return null;
                              })}
                            </p>
                          );
                        case "list":
                          const ListTag =
                            item.format === "ordered" ? "ol" : "ul";
                          return (
                            // <ListTag key={index} className="list-disc">
                            <ListTag key={index} className="list-none">
                              {item.children.map((listItem: any, listItemIndex: any) => (
                                <li key={listItemIndex}>
                                  {listItem.children.map(
                                    (child: any, childIndex: any) => {
                                      if (child.type === "text") {
                                        return (
                                          <div
                                            className="flex space-x-2 sm:space-x-4"
                                            key={childIndex}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              className="shrink-0 w-6 h-6"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                              ></path>
                                            </svg>
                                            <span
                                              key={childIndex}
                                              style={{
                                                fontWeight: child.bold
                                                  ? "bold"
                                                  : "normal",
                                              }}
                                            >
                                              {child.text}
                                            </span>
                                          </div>
                                        );
                                      }
                                      return null;
                                    }
                                  )}
                                </li>
                              ))}
                            </ListTag>
                          );
                        case "image":
                          return (
                            <div
                              key={index}
                              className="flex justify-center items-center mx-auto"
                            >
                              <Image
                                src={item?.image.url}
                                alt={item?.image.name && item?.image.name}
                                width={Math.min(item?.image.width, 500)}
                                height={Math.min(item?.image.height, 300)}
                                style={{
                                  objectFit: "contain",
                                  maxWidth: "100%",
                                  maxHeight: "100%",
                                  width: "auto",
                                  height: "auto",
                                }}
                              />
                            </div>
                          );
                        default:
                          return null;
                      }
                    })}
                </div>
              </>
            )}
            {/* fin */}
          </div>
          {/* Right column with image */}
          <div className="hidden lg:flex lg:w-1/2 justify-center ">
            <div className="inline-block">
              <Image
                src={fullImageUrl}
                alt="Interlink Logo Animation"
                width={500}
                height={300}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-32 max-w-7xl">
        <h2 className="title-font bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl text-center">
          Nos chiffres clés
        </h2>
        <div className="space-y-12">
          {/* First KPI */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between">
            <div className="mb-5 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <Image
                  src={proj}
                  alt=""
                  width={280}
                  height={180}
                  // className="w-16 h-16"
                />
                <div>
                  <p className="text-5xl font-bold">20</p>
                  <p className="text-xl">experts</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg">
                INTERLINK s&apos;appuie sur des équipes locales hautement
                qualifiées qui conçoivent, développent et déploient des
                solutions personnalisées.
              </p>
            </div>
          </div>

          {/* Second KPI */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="mb-5 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <Image
                  src={proj}
                  alt=""
                  width={280}
                  height={180}
                  // className="w-16 h-16"
                />
                <div>
                  <div className="flex items-end space-x-1">
                    <p className="text-5xl font-bold">14</p>
                    <p className="text-xl">ans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg">
                Depuis sa création, INTERLINK s&apos;est imposée comme un leader
                dans les solutions numériques, offrant des services en
                e-gouvernance, e-santé, et plus.
              </p>
            </div>
          </div>

          {/* Third KPI */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between">
            <div className="mb-5 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <Image
                  src={collab}
                  alt=""
                  width={280}
                  height={180}
                  // className="w-16 h-16"
                />
                <div>
                  <p className="text-5xl font-bold">6</p>
                  <p className="text-xl">domaines d&apos;expertise</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg">
                E-Gouvernance, E-Santé, Développement, Messagerie, Géoservices
                et Cybersécurité, avec des solutions innovantes pour les
                entreprises et les institutions.
              </p>
            </div>
          </div>

          {/* Fourth KPI */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="mb-5 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <Image
                  src={team}
                  alt=""
                  width={280}
                  height={180}
                  // className="w-16 h-16"
                />
                <div>
                  <p className="text-5xl font-bold">Partenariats avec</p>
                  <p className="text-xl">des leaders mondiaux</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg">
                Grâce à des partenariats solides, INTERLINK est à la pointe des
                innovations, garantissant des solutions évolutives et adaptées à
                chaque client.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Card className="p-10 mb-3 relative border-zinc-200 bg-transparent! text-zinc-950 shadow dark:border-accent dark:bg-accent dark:text-zinc-50">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-200 text-center lg:mb-20">
              <h1 className="title-font bg-gradient-to-r from-[#3b82f6] to-[#0d4c92] bg-clip-text text-transparent inline-block mb-4 text-xl font-bold leading-10 tracking-tight sm:text-5xl">
                Nos métiers
              </h1>
            </div>
          </div>
        </div>

        <Tabs defaultValue={works[0]?.attributes?.title} className="w-full">
          <TabsList className="px-16 mx-auto w-8xl bg-white gap-x-8 h-auto">
            {works.map((work: any) => (
              <TabsTrigger
                key={work.id}
                value={work.attributes.title}
                className="p-6 bg-blue-50 data-[state=active]:bg-[#0d4b92dc] data-[state=active]:text-white shadow min-h-25 px-5"
              >
                <div className="flex flex-row justify-between items-center gap-x-3">
                  <div className="bg-white p-2 rounded-lg">
                    <i
                      className={`ri-heart-pulse-line text-[#3784dde5] text-6xl`}
                    ></i>
                  </div>
                  <p className="text-lg font-bold text-wrap">
                    {work.attributes.title}
                  </p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {works.map((work: any) => (
            <TabsContent key={work.id} value={work.attributes.title}
            >
              <Card className="px-64 mb-3 relative border-transparent! shadow">
                <CardContent className="space-y-2">
                  {work.attributes.content.map((item: any, index: any) => {
                    if (item.type === "list") {
                      const ListTag = item.format === "ordered" ? "ol" : "ul";
                      return (
                        <ListTag key={index} className="list-none pl-5">
                          {item.children.map((listItem: any, listItemIndex: any) => (
                            <li key={listItemIndex}>
                              {listItem.children.map((child: any, childIndex: any) => {
                                if (child.type === "text") {
                                  return (
                                    <div
                                      className="flex space-x-2 sm:space-x-4"
                                      key={childIndex}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="shrink-0 w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                        ></path>
                                      </svg>
                                      <span
                                        key={childIndex}
                                        style={{
                                          fontWeight: child.bold
                                            ? "bold"
                                            : "normal",
                                        }}
                                      >
                                        {child.text}
                                      </span>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </li>
                          ))}
                        </ListTag>
                      );
                    }
                  })}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
      {/* § */}
    </>
  );
}
