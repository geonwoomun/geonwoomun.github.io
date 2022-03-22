import React from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/Main/PostItem';
import { PostListItemType } from 'types/PostItem.types';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

type PostListProps = {
  posts: PostListItemType[];
  searchWord: string;
  selectedCategory: string;
};

const PostList = ({ posts, selectedCategory, searchWord }: PostListProps) => {
  const { containerRef, postList } = useInfiniteScroll({
    posts,
    selectedCategory,
    searchWord,
  });

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            frontmatter,
            fields: { slug },
          },
        }) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 20px;
  }
`;
