interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  placeholder?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Hank Whitson',
    role: 'CEO/Creative Lead',
    image: '/lp/person1.png',
  },
  {
    id: '2',
    name: 'Dose of Culture',
    role: 'Culture',
    image: '/lp/culture.png',
  },
  {
    id: '3',
    name: 'Colin Solloway',
    role: 'Game Designer',
    image: '/lp/person2.png',
  },
  {
    id: '4',
    name: 'Ruben De Vela',
    role: 'Lead Artist',
    image: '/lp/person3.png',
  },
  {
    id: '5',
    name: 'Hugo Pereira',
    role: 'Lead Developer',
    image: '/lp/culture.png',
  },
];
