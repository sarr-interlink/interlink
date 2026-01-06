import { ImageAttribute } from "./CommonTypes"

export interface MemberType {
    id: number,
    attributes: MemberAttribute
}

interface MemberAttribute {
    FullName: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    facebook: string,
    linkedIn: string,
    twitter: string,
    instagram: string,
    poste: string,
    profilePicture: ProfilePictureType
}

interface ProfilePictureType {
    data: ProfilePictureData
}

interface ProfilePictureData {
    id: number,
    attributes: ProfilePictureAttribute
}

type ProfilePictureAttribute = ImageAttribute