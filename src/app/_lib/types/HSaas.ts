import { ImageAttribute } from "./CommonTypes";
import { HSaasDescriptionAttributeType } from "./HSaasDescription";

export interface HSaas {
    id: number,
    attributes: HSaasAttributeType  
}

export interface HSaasAttributeType extends HSaasDescriptionAttributeType {
    actionLabel: string,
    image: HSaasAttributeImageType
}

export interface HSaasAttributeImageType {
    data: HSaasAttributeImageData
}

interface HSaasAttributeImageData {
    id: number,
    attributes: HSaasAttributeImageDataAttribute
}

type HSaasAttributeImageDataAttribute = ImageAttribute