"use client";
import React from "react";
import { StickyScroll } from "@/src/components/ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "Frontend Architecture – Next.js",
    description:
      "Next.js is our primary frontend framework for building fast, SEO-friendly, and scalable web applications. It enables server-side rendering, static generation, and optimal performance for production-grade products.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png"
          width={420}
          height={420}
          className="object-contain p-6"
          alt="Next.js framework"
        />
      </div>
    ),
  },
  {
    title: "Frontend Framework – Angular",
    description:
      "Angular is used for enterprise-scale applications that require strong structure, strict typing, and long-term maintainability. It is ideal for complex dashboards and large internal systems.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="https://angular.io/assets/images/logos/angular/angular.png"
          width={300}
          height={300}
          className="object-contain p-6"
          alt="Angular framework"
        />
      </div>
    ),
  },
  {
    title: "Frontend Library – React",
    description:
      "React enables us to build highly interactive user interfaces with reusable components. It is the foundation of our modern frontend ecosystem and allows rapid iteration without sacrificing quality.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          width={300}
          height={300}
          className="object-contain p-6"
          alt="React library"
        />
      </div>
    ),
  },
  {
    title: "Mobile Development – React Native",
    description:
      "React Native allows us to deliver high-quality mobile applications for both iOS and Android from a single codebase, reducing development cost while maintaining native performance.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="https://reactnative.dev/img/header_logo.svg"
          width={300}
          height={300}
          className="object-contain p-6"
          alt="React Native"
        />
      </div>
    ),
  },
  {
    title: "Mobile Development – Flutter",
    description:
      "Flutter is used for visually rich, high-performance mobile and desktop applications. Its rendering engine ensures pixel-perfect UI consistency across platforms.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
          width={360}
          height={360}
          className="object-contain p-6"
          alt="Flutter framework"
        />
      </div>
    ),
  },
  {
    title: "Backend Platform – Spring Boot",
    description:
      "Spring Boot is our backbone for building secure, scalable, and enterprise-grade backend services. It provides strong architecture, dependency injection, and production-ready configurations.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src={"/techImages/backend/spring-boot.jpg"}
          width={360}
          height={360}
          className="object-contain p-6"
          alt="Spring Boot"
        />
      </div>
    ),
  },
  {
    title: "Build Automation – Maven & Gradle",
    description:
      "We use Maven and Gradle to manage dependencies, enforce build consistency, and automate testing and packaging. This ensures reproducible builds across all environments.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900 gap-8">
        <Image
          src="https://maven.apache.org/images/maven-logo-black-on-white.png"
          width={200}
          height={200}
          className="object-contain"
          alt="Apache Maven"
        />
        <Image
          src="https://gradle.org/images/gradle-knowledge-graph-logo.png"
          width={200}
          height={200}
          className="object-contain"
          alt="Gradle"
        />
      </div>
    ),
  },
  {
    title: "Backend Runtime – Node.js",
    description:
      "Node.js enables lightweight, high-throughput backend services and real-time applications. It is ideal for APIs, microservices, and event-driven architectures.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="https://nodejs.org/static/images/logo.svg"
          width={320}
          height={320}
          className="object-contain p-6"
          alt="Node.js"
        />
      </div>
    ),
  },
  {
    title: "Databases – MySQL & PostgreSQL",
    description:
      "We design relational databases using MySQL and PostgreSQL to ensure data integrity, performance, and scalability. These systems form the foundation of mission-critical applications.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900 gap-8">
        <Image
          src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
          width={220}
          height={220}
          className="object-contain"
          alt="MySQL"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
          width={220}
          height={220}
          className="object-contain"
          alt="PostgreSQL"
        />
      </div>
    ),
  },
  {
    title: "Version Control – Git & GitHub",
    description:
      "Git and GitHub power our collaboration workflow. They enable code reviews, branching strategies, and traceable history, ensuring quality and accountability at every stage.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900 gap-8">
        <Image
          src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          width={180}
          height={180}
          className="object-contain"
          alt="Git"
        />
        <Image
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          width={180}
          height={180}
          className="object-contain"
          alt="GitHub"
        />
      </div>
    ),
  },
  {
    title: "DevOps & Containers – Docker",
    description:
      "Docker allows us to package applications with all dependencies, ensuring consistency across development, testing, and production environments.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
          width={320}
          height={320}
          className="object-contain p-6"
          alt="Docker"
        />
      </div>
    ),
  },
  {
    title: "Project Management – Jira",
    description:
      "Jira structures our delivery process through agile workflows, sprint planning, and issue tracking, ensuring transparency and predictable execution.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="/techImages/build-tools/jira.png"
          width={300}
          height={300}
          className="object-contain p-6"
          alt="Jira"
        />
      </div>
    ),
  },
  {
    title: "Product Design – Figma",
    description:
      "Figma enables close collaboration between designers and engineers. We translate design systems into production-ready interfaces with precision and consistency.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          width={220}
          height={220}
          className="object-contain p-6"
          alt="Figma"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full overflow-hidden">
      <StickyScroll content={content} />
    </div>
  );
}
