import React from 'react';
import Template from 'components/Common/Template';
import Introduction from 'components/Main/Introduction';
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList';
import PostList from 'components/Main/PostList';
import SearchInput from 'components/Main/SearchInput';
import { PostListItemType } from 'types/PostItem.types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import queryString, { ParsedQuery } from 'query-string';
import { useMemo } from 'react';
import { graphql } from 'gatsby';

type IndexPageProps = {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};

const IndexPage = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: IndexPageProps) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const searchWord =
    typeof parsed.search !== 'string' || !parsed.search ? '' : parsed.search;

  const categoryList = useMemo(() => {
    const result = edges.reduce(
      (
        list: CategoryListProps['categoryList'],
        {
          node: {
            frontmatter: { categories, title },
          },
        }: PostListItemType,
      ) => {
        categories.forEach(category => {
          if (list[category] === undefined) {
            list[category] = 1;
          } else {
            list[category]++;
          }
        });

        list['All'] += 1;
        return list;
      },
      { All: 0 },
    );

    return result;
  }, []);

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <Introduction profileImage={gatsbyImageData} />
      <SearchInput searchWord={searchWord} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList
        searchWord={searchWord}
        selectedCategory={selectedCategory}
        posts={edges}
      />
    </Template>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`;
