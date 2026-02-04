
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { methodologieTabData } from "../utils"

export const Methodologie = () => {
    return (
        <Card className="border-0 mx-54 mb-4 py-16 ">
            <CardHeader>
                <CardTitle>
                    <h1 className="text-center font-bold text-5xl">Notre Methodologie</h1>
                </CardTitle>
            </CardHeader>

            <Tabs defaultValue="conseil" className="w-full border-0">

                <TabsList className="border-0 px-16 mx-auto w-8xl bg-white gap-x-8 h-auto">
                    {methodologieTabData.map(({value, iconClass, title}, index) => {
                        return (
                            <TabsTriggerCard key={index} value={value} iconClass={iconClass} title={title}/>
                        )
                    })}
                </TabsList>
                
                <>
                {methodologieTabData.map(({value,tabContent}, index) => {
                    return <TabContentCard key={index} value={value} title={tabContent.title} listData={tabContent.listData}/>
                })}
                </>

            </Tabs>
        </Card>
    )
}

const TabsTriggerCard = ({value, title}: {value: string, iconClass: string, title: string}) => {
    return (
        <TabsTrigger
        value={value}
        className="border-0 p-6 bg-gray-200 data-[state=active]:bg-blue-950 data-[state=active]:text-white shadow min-h-25 px-5"
        >
            <div className="flex flex-row justify-between items-center gap-x-3">
                <div className="bg-white p-2 rounded-lg">
                    <i className="text-blue-600  ri-heart-pulse-line text-6xl"></i>
                </div>
                <p className="text-lg font-bold text-wrap">
                {title}
                </p>
            </div>
        </TabsTrigger>
    )
}

export const TabContentCard = ({value ,title, listData}: {value: string, title: string, listData: string[]}) => {
    return (
        <TabsContent value={value}>
            <Card
            className={
                "border-0 p-10 mb-3 relative  border-transparent!  shadow "}
            >
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div>
                        <ul className="list-disc pl-5">
                        {listData.map((item) => <li className="text-lg font-medium font-serif" key={item}>{item}</li>)}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}