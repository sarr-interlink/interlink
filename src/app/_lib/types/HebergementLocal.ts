import { ImageAttribute } from "./CommonTypes"

export interface HebergementLocalType {
    id: number,
    attributes: HebergementLocalAttributeType
}

export interface HebergementLocalAttributeType {
    title: string,
    description: string,
    actionLabel: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    image: HebergementLocalAttributeImageType
}

export interface HebergementLocalAttributeImageType {
    data: HebergementLocalAttributeImageDataType
}

export interface HebergementLocalAttributeImageDataType {
    id: number,
    attributes: HebergementLocalAttributeImageDataAttributeType
}

export type HebergementLocalAttributeImageDataAttributeType = ImageAttribute