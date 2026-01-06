export interface HebergementLocalDesciptionType {
    id: number,
    attributes: HebergementLocalDesciptionAttributeType
}

export interface HebergementLocalDesciptionAttributeType {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}