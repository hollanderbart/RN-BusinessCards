export type BusinessCard = {
  id: number;
  name: string;
  title: string;
  company: string;
  email: string;
  favorite_emoji: string;
};

export const businessCards: BusinessCard[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Marketing Manager',
    company: 'Global Corp.',
    email: 'alice@globalcorp.com',
    favorite_emoji: '🌟',
  },
  {
    id: 2,
    name: 'Bob Smith',
    title: 'Product Designer',
    company: 'InnovateTech',
    email: 'bob@innovatetech.com',
    favorite_emoji: '😎',
  },
  {
    id: 3,
    name: 'Eva Williams',
    title: 'HR Manager',
    company: 'PeopleLink',
    email: 'eva@peoplelink.com',
    favorite_emoji: '❤️',
  },
  {
    id: 4,
    name: 'David Lee',
    title: 'Financial Analyst',
    company: 'FinanciCorp',
    email: 'david@financicorp.com',
    favorite_emoji: '💼',
  },
  {
    id: 5,
    name: 'Grace Taylor',
    title: 'Sales Representative',
    company: 'SalesPro',
    email: 'grace@salespro.com',
    favorite_emoji: '💰',
  },
  {
    id: 6,
    name: 'Charlie Brown',
    title: 'Software Engineer',
    company: 'CodeTech',
    email: 'charlie@codetech.com',
    favorite_emoji: '💻',
  },
  {
    id: 7,
    name: 'Olivia Miller',
    title: 'Graphic Designer',
    company: 'DesignMasters',
    email: 'olivia@designmasters.com',
    favorite_emoji: '🎨',
  },
  {
    id: 8,
    name: 'Michael Turner',
    title: 'Product Manager',
    company: 'ProductWorld',
    email: 'michael@productworld.com',
    favorite_emoji: '🚀',
  },
  {
    id: 9,
    name: 'Sophia Reed',
    title: 'Customer Support',
    company: 'SupportHub',
    email: 'sophia@supporthub.com',
    favorite_emoji: '🤝',
  },
  {
    id: 10,
    name: 'William Clark',
    title: 'CEO',
    company: 'Success Inc.',
    email: 'william@successinc.com',
    favorite_emoji: '👑',
  },
];
