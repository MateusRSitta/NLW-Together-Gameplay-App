import React from 'react';

import { Container } from './styles';

import { categories } from '../../utils/categories';

import Category from '../Category';

type TCategoryListProps = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

const CategoryList: React.FC<TCategoryListProps> = ({ categorySelected, setCategory, hasCheckBox = false }: TCategoryListProps) => {
    return (
        <Container
            horizontal
            showsHorizontalScrollIndicator={false}
            overScrollMode='never'
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </Container>
    )
}

export default CategoryList;
