import Layout from '../components/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TagsSection } from 'views/Money/TagsSection'
import { NotesSection } from 'views/Money/NotesSection'
import { CategorySection } from 'views/Money/CategorySection'
import { NumberPadSection } from 'views/Money/NumberPadSection'
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'
function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  })
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
        onChange={(tags) => setSelected({
          ...selected,
          tags: tags
        })}
      >
      </TagsSection>
      <NotesSection value={selected.note}
        onChange={(note) => {
          setSelected({
            ...selected,
            note: note
          });
        }}
      >
      </NotesSection>
      <CategorySection value={selected.category}
        onChange={(category) => {
          setSelected({
            ...selected,
            category: category
          })
        }}
      >
      </CategorySection>
      <NumberPadSection value={selected.amount}
        onChange={(amount) => {
          setSelected({
            ...selected,
            amount: amount
          })
        }}
      >
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;