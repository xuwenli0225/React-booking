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
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      {selected.tags.join(',')}
      <br />
      {selected.note}
      <br />
      {selected.category}
      <br />
      {selected.amount}
      <TagsSection value={selected.tags}
        onChange={tags => onChange({ tags })}
      >
      </TagsSection>
      <NotesSection value={selected.note}
        onChange={note => onChange({ note })}
      >
      </NotesSection>
      <CategorySection value={selected.category}
        onChange={category => onChange({ category })}
      >
      </CategorySection>
      <NumberPadSection value={selected.amount}
        onChange={amount => onChange({ amount })}
        onOk={() => { }}
      >
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;