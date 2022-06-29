import React, { useEffect, useState } from 'react';
import { AvatarSize, AvatarType } from './enums';

import { AvatarProps } from './types';

export const Avatar = ({
    size = AvatarSize.Normal,
    url,
    name,
    lastName,
    type = AvatarType.Circle,
}: AvatarProps) => {
    const [image, setImage] = useState<string>('');
    const [initials, setInitials] = useState<string>('');

    useEffect(() => {
        if (name && lastName) {
            setInitials(`${name[0]}${lastName[0]}`);
        }
    }, [name, lastName]);

    useEffect(() => {
        setImage(url || '');
    }, [url]);

    return image || initials ? (
        image ? (
            <div className={`avatar avatar-${size}`}>
                <img src={image} alt="Avatar" className={type} />
            </div>
        ) : (
            <div className={`avatar avatar-${size} me-2`}>
                <span className={`avatar-initial ${type} bg-label-info`}>{initials}</span>
            </div>
        )
    ) : null;
};
