const RandomNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Kate",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rose",
  "Sam",
  "Tina",
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
  "Zane",
  "Abigail",
  "Benjamin",
  "Chloe",
  "Daniel",
  "Emily",
  "Fiona",
  "George",
  "Hannah",
  "Isaac",
  "Julia",
  "Kevin",
  "Lily",
  "Mason",
  "Nora",
  "Oscar",
  "Penelope",
  "Quentin",
  "Rachel",
  "Simon",
  "Tiffany",
  "Ulysses",
  "Violet",
  "William",
  "Xavier",
  "Yasmine",
  "Zoey",
  "Stephen",
  "Gerrard",
  "Adewale",
];

// Generate 50 sample profiles
const profile = () => {
  const data = [];
  for (let i = 0; i <= RandomNames.length; i++) {
    if (RandomNames[i]) {
      const profile = {
        name: RandomNames[i],
        email: `${RandomNames[i].toLowerCase()}@example.com`,
        username: `user${RandomNames[i].toLowerCase()}_username`,
        photo: `https://source.unsplash.com/random/200x200?sig=${i}`,
      };
      data.push(profile);
    }
  }
  return data;
};

export { profile };
