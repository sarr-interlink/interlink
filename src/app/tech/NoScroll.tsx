/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import angular from "./angular.png"
import reactNative from "./react-native.png"
import flutter from "./flutter.jpg"
import sboot from "./spring-boot.png"
import mavenGradle from "./maven-gradle.png"
import mysqlPsql from "./mysql-postgresql.jpg"
import gitGhub from "./git-github.png"
import docker from "./Docker.png"
import jira from "./jira.png"
import figma from "./Figma.png"

export function NoScroll() {
    return (
        <div className="py-10 space-y-16">
            {
                content.map((cntnt: any) => {
                    return (
                        <div key={cntnt.title} className="flex flex-row justify-center items-center gap-x-32 space-y-64">
                            
                            <div className="max-w-xl text-2xl text-center font-bold ">{cntnt.description}</div>
                            
                            <div>
                                {cntnt.content}
                            </div>
                            
                            {/* <div>
                                <Image
                                src="https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png"
                                width={420}
                                height={420}
                                className="object-contain p-6"
                                alt="Next.js framework"
                                />
                            </div> */}
                        
                        </div>
                    )
                })
            }
        </div>
    )
}

const content = [
  {
    title: "Frontend Architecture – Next.js",
    description:
      "Next.js is our primary frontend framework for building fast, SEO-friendly, and scalable web applications. It enables server-side rendering, static generation, and optimal performance for production-grade products.",
    content: (
        <Image
          src="https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png"
          width={420}
          height={420}
          className="object-contain p-6"
          alt="Next.js framework"
        />
    ),
  },
  {
    title: "Frontend Framework – Angular",
    description:
      "Angular is used for enterprise-scale applications that require strong structure, strict typing, and long-term maintainability. It is ideal for complex dashboards and large internal systems.",
    content: (
        <Image
        src={angular}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  
  {
    title: "Mobile Development – React Native",
    description:
      "React Native allows us to deliver high-quality mobile applications for both iOS and Android from a single codebase, reducing development cost while maintaining native performance.",
    content: (
        <Image
        src={reactNative}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  {
    title: "Mobile Development – Flutter",
    description:
      "Flutter is used for visually rich, high-performance mobile and desktop applications. Its rendering engine ensures pixel-perfect UI consistency across platforms.",
    content: (
        <Image
        src={flutter}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  {
    title: "Backend Platform – Spring Boot",
    description:
      "Spring Boot is our backbone for building secure, scalable, and enterprise-grade backend services. It provides strong architecture, dependency injection, and production-ready configurations.",
    content: (
        <Image
        src={sboot}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  {
    title: "Build Automation – Maven & Gradle",
    description:
      "We use Maven and Gradle to manage dependencies, enforce build consistency, and automate testing and packaging. This ensures reproducible builds across all environments.",
    content: (
        <Image
        src={mavenGradle}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  
  {
    title: "Databases – MySQL & PostgreSQL",
    description:
      "We design relational databases using MySQL and PostgreSQL to ensure data integrity, performance, and scalability. These systems form the foundation of mission-critical applications.",
    content: (
        <Image
        src={mysqlPsql}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  {
    title: "Version Control – Git & GitHub",
    description:
      "Git and GitHub power our collaboration workflow. They enable code reviews, branching strategies, and traceable history, ensuring quality and accountability at every stage.",
    content: (
        <Image
        src={gitGhub}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  {
    title: "DevOps & Containers – Docker",
    description:
      "Docker allows us to package applications with all dependencies, ensuring consistency across development, testing, and production environments.",
    content: (
        <Image
        src={docker}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  {
    title: "Project Management – Jira",
    description:
      "Jira structures our delivery process through agile workflows, sprint planning, and issue tracking, ensuring transparency and predictable execution.",
    content: (
        <Image
        src={jira}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
  {
    title: "Product Design – Figma",
    description:
      "Figma enables close collaboration between designers and engineers. We translate design systems into production-ready interfaces with precision and consistency.",
    content: (
        <Image
        src={figma}
        width={420}
        height={420}
        className="object-contain p-6"
        alt="Next.js framework"
        />
    ),
  },
];