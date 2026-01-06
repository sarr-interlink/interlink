import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getValues } from "@/src/app/_lib/data-services";
import { ValueAttributeType, ValueType } from "@/src/app/_lib/types/ValuesType";

export async function Values() {

  const values: {data: ValueType[]} = await getValues();
  
  return (
    <div>
        <h1 className="text-center text-5xl font-extrabold mt-4">Valeurs</h1>
        <h3 className="text-center text-xl font-black mt-3">Pourquoi nous choisir</h3>
        
        <div className="mt-10 flex flex-row items-center justify-center flex-wrap gap-6">
          {values &&
              values.data &&
              values.data.length > 0 &&
              values.data.map((value: ValueType) => {
                const attributes: ValueAttributeType = value.attributes || {} as ValueAttributeType;
                return (
                  <ValueCard key={attributes.createdAt} attributes={attributes}/>
                )
              })
            }
            
        </div>
    </div>
  );
}


const ValueCard = ({attributes}: {attributes: ValueAttributeType}) => {
  return (
    <Card className="w-70 h-70 md:w-120 md:h-70">
      
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-5">
          <i className={`${attributes.iconClass} text-4xl bg-blue-950 text-yellow-500 rounded-md p-3`}></i>
          <h4 className="">
            {attributes.title || "No Title"}
          </h4>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-body-color dark:text-dark-6">
          {attributes.description || "No Description"}
        </p>
      </CardContent>
    </Card>
  )
}

