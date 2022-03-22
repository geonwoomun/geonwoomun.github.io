import styled from '@emotion/styled';
import React, { MutableRefObject } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { navigate } from 'gatsby';
import { createURL } from 'utils/createURL';

type SearchInputProps = {
  searchWord: string;
};

const SearchInput = ({ searchWord }: SearchInputProps) => {
  const inputRef: MutableRefObject<HTMLInputElement | null> =
    useRef<HTMLInputElement>(null);

  const onSearch = () => {
    navigate(
      createURL({
        nowPath: '/',
        params: {
          search: inputRef.current?.value || '',
        },
      }),
    );
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchWord || '';
    }
  }, [inputRef.current]);

  return (
    <SearchInputContainer>
      <label htmlFor="search__title">검색</label>
      <input
        id="search__title"
        ref={inputRef}
        placeholder="제목으로 검색"
        onKeyUp={onKeyUp}
      />
      <button type="button" onClick={onSearch}>
        검색
      </button>
    </SearchInputContainer>
  );
};

export default SearchInput;

const SearchInputContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & label {
    visibility: hidden;
  }

  & input {
    width: 300px;
    height: 36px;
    padding: 0px 10px;
    border-right: none;
    border-radius: 8px 0px 0px 8px;

    &:focus {
      outline: none;
    }
  }

  & button {
    width: 60px;
    background: black;
    color: white;
    border: none;
    border-radius: 0px 8px 8px 0px;
    cursor: pointer;
  }
`;
