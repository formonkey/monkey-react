export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '';

export type AvatarType = 'rounded-circle' | 'rounded' | '';

export type AvatarProps = {
    size?: AvatarSize;
    url?: string;
    name?: string;
    lastName?: string;
    type?: AvatarType;
}