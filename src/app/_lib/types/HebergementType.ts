import { ImageAttribute } from "./CommonTypes"


export interface HebergementType {
    id: number,
    attributes: HebergementAttributeType
}

export interface HebergementAttributeType {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    image: HebergementAttributeImageType
}

export interface HebergementAttributeImageType {
    data: HebergementAttributeImageDataType
}

export interface HebergementAttributeImageDataType {
    id: number,
    attributes: HebergementAttributeImageDataAttributesType
}

export type HebergementAttributeImageDataAttributesType = ImageAttribute