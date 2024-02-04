import { Hero, HeroProps } from '@ayahub/ui';

const actions: HeroProps['actions'] = [
  {
    icon: 'Github',
    link: 'https://github.com/ayahub',
    text: 'Github',
  },
  {
    link: '/components/action-icon',
    text: 'Get Started',
    type: 'primary',
  },
];

export default () => {
  return (
    <Hero
      actions={actions}
      description="Aya UI is an open-source UI component library for <br/>building chatbot web apps"
      title="Aya <b>UI</b>"
    />
  );
};
