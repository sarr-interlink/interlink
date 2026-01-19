
import { getValues } from "@/src/app/_lib/data-services";
import { ValuesClient } from "./ValeurClient";
import { ValueType } from "@/src/app/_lib/types/ValuesType";

// import { BackgroundRippleEffect } from "@/src/components/ui/background-ripple-effect";
export async function Values() {

  const values: {data: ValueType[]} = await getValues();

  return <ValuesClient values={values} />
}