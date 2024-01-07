import type { Basketball, Matches, Volleyball } from "./data";

import { matchesParser } from "./matchesParser";

const volleyballMatch: Volleyball = {
  sport: 'volleyball',
  participant1: 'Poland',
  participant2: 'Japan',
  score: '3:2,25:23,25:19,21:25, 12:25, 15:7',
}

const basketballMatch: Basketball = {
  sport: 'basketball',
  participant1: 'GKS Tychy',
  participant2: 'GKS Katowice',
  score: [
    ['9:7', '2:1'],
    ['5:3', '9:9']
  ],
}

test('should display the correct score for a 5-set volleyball match', () => {
  expect(matchesParser(volleyballMatch)).toStrictEqual({
    name: 'Poland - Japan',
    score: 'Main score: 3:2 (set1 25:23, set2 25:19, set3 21:25, set4  12:25, set5  15:7)'
  });
});

test('should display the correct score for a basketball match', () => {
  expect(matchesParser(basketballMatch)).toStrictEqual({
    name: 'GKS Tychy - GKS Katowice',
    score: '9:7,2:1,5:3,9:9'
  });
});

test("it shouldn't display anything for ski jumping", () => {
  expect(matchesParser({
    sport: "ski jumping",
  })).toBeUndefined();
});

