export interface ValueType {
    id: number,
    attributes: ValueAttributeType
}

export interface ValueAttributeType {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    subT?: string,
    iconClass: string
}