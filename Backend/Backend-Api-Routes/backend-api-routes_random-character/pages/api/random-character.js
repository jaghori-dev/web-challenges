import Chance from "chance";

const chance = new Chance();
export default function handler(req, res) {
  const character = {
    firstName: chance.name(),
    lastName: chance.last(),
    age: chance.age(),
    profession: chance.profession(),
    birthday: chance.birthday(),
    address: chance.address(),
    phone: chance.phone(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };
  res.status(200).json(character);
}
