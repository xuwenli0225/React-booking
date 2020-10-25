import React from 'react'
import { useTags } from 'hooks/useTags'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from 'components/Button'
import { Center } from 'components/Center'
import { Space } from 'components/Space'
import { Input } from 'components/Input'
import Layout from 'components/Layout'
import Icon from 'components/Icon'
import styled from 'styled-components'
type Params = {
  id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`
const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags()
  let { id: idString } = useParams<Params>()
  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" value={tag.name} type="text" placeholder="标签名"
          onChange={(e) => {
            updateTag(tag.id, { name: e.target.value })
          }}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={() => {
          deleteTag(tag.id)
        }}>删除标签</Button>
      </Center>
    </div>
  );
  const tag = findTag(parseInt(idString))
  const history = useHistory()
  const onClickBack = () => {
    history.goBack()
  }
  return (
    <div>
      <Layout>
        <Topbar>
          <Icon name="left" onClick={onClickBack} />
          <span>编辑标签</span>
          <Icon />
        </Topbar>
        {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
      </Layout>
    </div>
  )
}
export { Tag }