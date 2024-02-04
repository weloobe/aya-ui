import { Footer, FooterProps } from '@ayahub/ui';

const columns: FooterProps['columns'] = [
  {
    items: [
      {
        description: 'AIGC Components',
        openExternal: true,
        title: '🤯 Aya UI',
        url: 'https://github.com/weloobe/aya-ui',
      },
      {
        description: 'Chatbot Client',
        openExternal: true,
        title: '🤯 Aya Chat',
        url: 'https://github.com/weloobe/aya-chat',
      },
      {
        description: 'Node Flow Editor',
        openExternal: true,
        title: '🤯 Aya Flow',
        url: 'https://github.com/weloobe/aya-flow',
      },
    ],
    title: 'Resources',
  },
  {
    items: [
      {
        description: 'AI Commit CLI',
        openExternal: true,
        title: '💌 Aya Commit',
        url: 'https://github.com/weloobe/aya-commit',
      },
      {
        description: 'Lint Config',
        openExternal: true,
        title: '📐 Aya Lint',
        url: 'https://github.com/weloobe/aya-lint',
      },
    ],
    title: 'More Products',
  },
];

export default () => {
  return <Footer bottom="Copyright © 2022" columns={columns} />;
};
