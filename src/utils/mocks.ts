interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  expertise: string;
  funFact: string;
  image?: string;
  placeholder?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Hank Whitson",
    role: "CEO/Creative Lead",
    image: "/lp/TeamPerson/person1.png",
    location: "Los Angeles, California, USA",
    expertise: "Game Design, Fiction, Anime",
    funFact: "Was a ballet dancer a long, long time ago",
  },
  {
    id: "2",
    name: "Dose of Culture",
    role: "Culture",
    image: "/lp/TeamPerson/culture.png",
    location: "Los Angeles, California, USA",
    expertise: "Game Design, Fiction, Anime",
    funFact: "Was a ballet dancer a long, long time ago",
  },
  {
    id: "3",
    name: "Colin Solloway",
    role: "Game Designer",
    image: "/lp/TeamPerson/person2.png",
    location: "Los Angeles, California, USA",
    expertise: "Game Design, Fiction, Anime",
    funFact: "Was a ballet dancer a long, long time ago",
  },
  {
    id: "4",
    name: "Ruben De Vela",
    role: "Lead Artist",
    image: "/lp/TeamPerson/person3.png",
    location: "Los Angeles, California, USA",
    expertise: "Game Design, Fiction, Anime",
    funFact: "Was a ballet dancer a long, long time ago",
  },
  {
    id: "5",
    name: "Hugo Pereira",
    role: "Lead Developer",
    image: "/lp/TeamPerson/culture.png",
    location: "Los Angeles, California, USA",
    expertise: "Game Design, Fiction, Anime",
    funFact: "Was a ballet dancer a long, long time ago",
  },
];
