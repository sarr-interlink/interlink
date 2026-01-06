interface ImageFormat {
    thumbnail?: ImageFormatData
    small?: ImageFormatData,
    medium?: ImageFormatData,
    large?: ImageFormatData
}

interface ImageFormatData {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path?: string,
    width: number,
    height: number,
    size: number,
    sizeInBytes: number,
    url: string

}

export interface ImageAttribute {
    name: string,
    alternativeText?: string,
    caption?: string,
    width: number,
    height: number,
    formats: ImageFormat,
    hash: string,
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