import styled from '@emotion/styled';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'geonwoomun/geonwoomun.github.io';

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const CommentWidget = () => {
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!element.current) {
      return;
    }

    const utterances = document.createElement('script');
    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <UtterancesWrapper ref={element} />;
};

export default CommentWidget;

const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
