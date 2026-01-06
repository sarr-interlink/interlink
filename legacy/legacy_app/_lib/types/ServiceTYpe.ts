import { ImageAttribute } from "./CommonTypes"

export interface ServiceType {
    id: number,
    attributes: ServiceTypeAttribute
}

export interface ServiceTypeAttribute {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string, 
    iconClass: string,
    icon: IconType
}

export interface IconType {
    data: IconTypeData
}

export interface IconTypeData {
    id: number,
    attributes: IconTypeDataAttribute
}

export type IconTypeDataAttribute = ImageAttribute