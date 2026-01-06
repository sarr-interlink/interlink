import Image from "next/image";
import Link from "next/link";
import { Article } from "../utils";
import { articles } from "../utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ArticleSection() {
  

  return (
   
    <div>
        <h1 className="text-center text-6xl font-black text-blue-900">
            Nos dérniers articles
        </h1>   

        <div className="pt-10 flex flex-row items-center justify-center gap-x-10">
          {articles.map((article: Article) => {
            return <ArticleCard key={article.id} article={article} />
          })}
        </div>

        <div className="flex flex-row items-center justify-center mt-16">
            <Button asChild className="p-6 font-extrabold text-lg" variant={"outline"}>
                <Link href="/article">
                <span className="mr-2">Nos articles</span>
                <i className="lni lni-arrow-right"></i>
                </Link>
            </Button>
        </div>

    </div>
  );
}


const ArticleCard = ({article}: {article: Article}) => {
    return (
        <Card className="w-md">
            <CardHeader>
                <CardTitle className="gap-y-6 flex flex-col">
                    <Image
                      src={article.imageSrc}
                      alt={article.title}
                      width={500} // Définissez uniquement la largeur ou utilisez 'layout="responsive"' pour les images responsives
                      height={160} // Assurez-vous que la dimension opposée est 'auto' pour éviter la déformation
                      className="w-full h-auto object-cover rounded-t-lg" // Utilisez 'h-auto' pour maintenir le ratio
                    />
                    <h3 className="text-2xl text-blue-950">{article.title}</h3>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-4 text-lg font-medium">{article.description}</p>
            </CardContent>
            <CardFooter>
                <Link
                href={`/article/${article.id}`}
                className="p-2 bg-blue-950 text-white font-extrabold rounded-md hover:underline">
                  Lire la suite
                </Link>
            </CardFooter>
        </Card>
    )
}