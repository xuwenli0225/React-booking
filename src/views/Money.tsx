import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import { TagsSection } from 'views/Money/TagsSection'
import { NotesSection } from 'views/Money/NotesSection'
import { CategorySection } from 'views/Money/CategorySection'
import { NumberPadSection } from 'views/Money/NumberPadSection'
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection>
      </TagsSection>
      <NotesSection>
      </NotesSection>
      <CategorySection>
      </CategorySection>
      <NumberPadSection>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;