import React from 'react';
import MemoButton from './MemoButton';
import styled from 'styled-components';
import { Memo, Memos } from '../App';

const StyledMemoList = styled.div`
    height: 768px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 100px;
`;


const MemoList = (props: { memos: Memos }) => (
    <StyledMemoList>
        {
            props.memos.map((memo: Memo) => (
                <MemoButton
                    key={memo.id}
                    id={memo.id}
                    title={memo.title}
                    description={memo.description}
                />
            ))
        }
    </StyledMemoList>
);

export default MemoList;