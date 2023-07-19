import {  useState } from 'react';
import { Outlet } from 'react-router-dom';

import CategoriesList from 'components/CategoriesList/CategoriesList';

import {
 
  StyledContainer,
  StyledText,
  StyledCategoriesPagesWraper,
} from './Categories.styled';

const Categories = ({ categoriesFirst }) => {
  const [categories, ] = useState([
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f8a',
      },
      name: 'Seafood',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f8b',
      },
      name: 'Lamb',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f8c',
      },
      name: 'Starter',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f8d',
      },
      name: 'Chicken',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f8e',
      },
      name: 'Beef',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f8f',
      },
      name: 'Dessert',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f90',
      },
      name: 'Vegan',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f91',
      },
      name: 'Pork',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f92',
      },
      name: 'Vegetarian',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f93',
      },
      name: 'Miscellaneous',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f94',
      },
      name: 'Pasta',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f95',
      },
      name: 'Breakfast',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f96',
      },
      name: 'Side',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f97',
      },
      name: 'Goat',
    },
    {
      _id: {
        $oid: '6462a6cd4c3d0ddd28897f98',
      },
      name: 'Soup',
    },
  ]);
  return (
    <StyledCategoriesPagesWraper>
      <StyledText>Categories</StyledText>
      <StyledContainer>
        <>{<CategoriesList categories={categories} />}</>
      </StyledContainer>
      <Outlet />
    </StyledCategoriesPagesWraper>
  );
};

export default Categories;
