import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mySidebar: [
    {
      type: 'category',
      label: 'Category 1',
      items: [
        'category1/page1',
        'category1/page2',
      ],
    },
    {
      type: 'category',
      label: 'Category 2',
      items: [
        'category2/page3',
        'category2/page4',
      ],
    },
  ],
};

export default sidebars;
