export interface HSaasDescriptionType {
    id: number,
    attributes: HSaasDescriptionAttributeType
}

export interface HSaasDescriptionAttributeType {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}