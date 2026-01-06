import { ImageAttribute } from "./CommonTypes"

export interface TestimonialType {
    id: number,
    attributes: TestimonialAttribute,
}

export interface TestimonialAttribute {
    commentary: string,
    Compagnie: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    Name: string,
    image: TestimonialImageType
}

export interface TestimonialImageType {
    data: TestimonialImageData
}

export interface TestimonialImageData {
    id: number,
    attributes: TestimonialImageDataAttribute
}

export type TestimonialImageDataAttribute = ImageAttribute