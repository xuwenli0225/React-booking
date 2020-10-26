import Layout from '../components/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TagsSection } from 'views/Money/TagsSection'
import { NotesSection } from 'views/Money/NotesSection'
import { CategorySection } from 'views/Money/CategorySection'
import { NumberPadSection } from 'views/Money/NumberPadSection'
import { useRecords } from 'hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`
function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  const { addRecord } = useRecords()
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功')
      setSelected(defaultFormData)
    }
  }
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <TagsSection value={selected.tagIds}
        onChange={tagIds => onChange({ tagIds })}
      >
      </TagsSection>
      <NotesSection value={selected.note}
        onChange={note => onChange({ note })}
      >
      </NotesSection>
      <CategoryWrapper>
        <CategorySection value={selected.category}
          onChange={category => onChange({ category })}
        >
        </CategorySection>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
        onChange={amount => onChange({ amount })}
        onOk={submit}
      >
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;