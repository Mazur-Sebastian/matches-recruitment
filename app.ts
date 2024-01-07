import { Matches, matches } from "./app/data";
import { matchesParser } from "./app/matchesParser";

export const getMatchesParsed = (matches: Matches[]) => matches.map(matchesParser).filter(Boolean);

console.log(getMatchesParsed(matches));