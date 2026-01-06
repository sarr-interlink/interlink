import { ImageAttribute } from "./CommonTypes"

export interface TarificationType {
    id: number,
    attributes: TarificationAttributeType
}

export interface TarificationAttributeType {
    title: string,
    description: string,
    actionLabel: string,
    summary: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    image: TarificationAttributeImageType
}

export interface TarificationAttributeImageType {
    data: TarificationAttributeImageDataType
}

export interface TarificationAttributeImageDataType {
    id: number,
    attributes: TarificationAttributeImageDataAttributeType
}

export type TarificationAttributeImageDataAttributeType = ImageAttribute