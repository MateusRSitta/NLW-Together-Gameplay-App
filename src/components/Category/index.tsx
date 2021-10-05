import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Gradient, Content, CheckedCategory, CheckCategory, Title } from './styles';

import { theme } from '../../global/styles/theme';

type TCategoryProps = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
};

const Category: React.FC<TCategoryProps> = ({
    title,
    icon: Icon,
    hasCheckBox = false,
    checked = false,
    ...rest
}: TCategoryProps) => {
    const { secondary40, secondary50, secondary70, secondary75 } = theme.colors;
    
    return (
        <RectButton {...rest}>
            <Gradient 
                colors={[secondary50, secondary70]}
            >
                <Content
                    style={{ opacity: checked ? 1 : 0.5 }}
                    colors={[ checked ? secondary75 : secondary50, secondary40 ]}
                >
                    {
                        hasCheckBox &&
                        (checked ? <CheckedCategory /> : <CheckCategory />)
                    }
                    <Icon
                        height={48}
                        width={48}
                    />
                    <Title>{title}</Title>
                </Content>
            </Gradient>
        </RectButton>
    )
}

export default Category;
