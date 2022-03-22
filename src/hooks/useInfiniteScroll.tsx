import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { MutableRefObject, useRef } from 'react';
import { PostListItemType } from 'types/PostItem.types';

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: PostListItemType[];
};

const NUMBER_OF_ITEMS_PER_PAGE = 10;

type UseInfiniteScroll = {
  posts: PostListItemType[];
  selectedCategory: string;
  searchWord: string;
};

const useInfiniteScroll = ({
  selectedCategory,
  posts,
  searchWord,
}: UseInfiniteScroll) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null);
  const [count, setCount] = useState<number>(1);

  const postListByCategory = useMemo(() => {
    const lowerSearch = searchWord.toLowerCase();

    if (selectedCategory === 'All') {
      if (!searchWord) {
        return posts;
      }

      return posts.filter(
        ({
          node: {
            frontmatter: { title },
          },
        }) => title.toLowerCase().includes(lowerSearch),
      );
    }

    return posts.filter(
      ({
        node: {
          frontmatter: { categories, title },
        },
      }) => {
        if (searchWord) {
          return (
            title.toLowerCase().includes(lowerSearch) &&
            categories.includes(selectedCategory)
          );
        }

        return categories.includes(selectedCategory);
      },
    );
  }, [selectedCategory, searchWord, posts]);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }

      setCount(value => value + 1);
      observer.unobserve(entries[0].target);
    });
  }, []);

  useEffect(() => {
    setCount(1);
  }, [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    ) {
      return;
    }

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count, selectedCategory]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;
