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
    role: "User Experience Design",
    image: "/lp/TeamPerson/culture.png",
    location: "Lviv, Ukraine",
    expertise: "UX Design, Worldbuilding, and making things look like art.",
    funFact: "Our best concepts are born during late-night creative sprints.",
  },
  {
    id: "3",
    name: "Colin Solloway",
    role: "Game Designer",
    image: "/lp/TeamPerson/person2.png",
    location: "Long Beach, California. USA",
    expertise: "Systems Design, Stress Testing, Shenanigans ",
    funFact: "Competitive MTG: Commander (CEDH) player",
  },
  {
    id: "4",
    name: "Ruben De Vela",
    role: "Lead Artist",
    image: "/lp/TeamPerson/person3.png",
    location: "Manila, Luzon, Philippines",
    expertise: "Illustration, Concept Art, Dwarf Fortress",
    funFact: "Illustrated backgrounds for One Piece",
  },
  {
    id: "5",
    name: "Hugo Pereira",
    role: "Lead Developer",
    image: "/lp/TeamPerson/culture.png",
    location: "São Paulo, Brazil ",
    expertise: "Developer Sênior",
    funFact: "Nada",
  },
];
