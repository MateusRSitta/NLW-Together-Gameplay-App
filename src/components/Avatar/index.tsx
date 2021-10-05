import React from 'react';

import { Picture } from './styles';

type IAvatarProps = {
    urlImage: string;
}

const Avatar: React.FC<IAvatarProps> = ({ urlImage }) => {
    return (
        <Picture
            source={{ uri: `${urlImage}` }}
        />
    )
}

export default Avatar;
