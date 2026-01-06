import { ImageAttribute} from "./CommonTypes"

export interface ProductType {
    id: number,
    attributes: ProductAttributeType
}

export interface ProductAttributeType {
    title: string,
    Description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    subTitle?: string,
    logo: LogoType,
    image: ImageType,
    video: VideoType
}

interface LogoType {
    data: LogoData
}

interface LogoData {
    id: number,
    attributes: LogoAttribute
}

interface LogoAttribute {
    name: string,
    alternativeText?: string,
    captionz?: string,
    width: number,
    height: number,
    formats?: string,
    hash?: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl?: string,
    provider: string,
    provider_metadata?: string,
    createdAt: string,
    updatedAt: string
}

interface ImageType {
    data: ImageData
}

interface ImageData {
    id: number
    attributes: ImageAttribute
}





interface VideoType {
    data? : string
}
