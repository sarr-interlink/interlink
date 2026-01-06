import { ImageAttribute } from "./CommonTypes"

export interface ReferenceType {
    id: number,
    attributes: ReferenceAttributeType
}

export interface ReferenceAttributeType {
    Name: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    logo: ReferenceLogo
}

export interface ReferenceLogo {
    data: ReferenceLogoData
}

interface ReferenceLogoData {
    id: number,
    attributes: ReferenceLogoDataAttributeType
}

type ReferenceLogoDataAttributeType = ImageAttribute