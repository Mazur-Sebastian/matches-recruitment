import { Basketball, Handball, Matches, Soccer, Tennis, Volleyball } from "./data";

const scoreParserWithSets = (score: string) => {
  const [main, ...sets] = score.split(',');
  const setsLabel = sets.map((v, i) => `set${i + 1} ${v}`).join(', ')

  return `Main score: ${main} (${setsLabel})`
}

const soccerParser = (match: Soccer) => {
  return {
    name: `${match.participant1} - ${match.participant2}`,
    score: match.score
  }
}

const volleyballParser = (match: Volleyball) => {
  return {
    name: `${match.participant1} - ${match.participant2}`,
    score: scoreParserWithSets(match.score)
  }
}

const handballParser = (match: Handball) => {
  return {
    name: `${match.participant1} vs ${match.participant2}`,
    score: match.score
  }
}

const basketballParser = (match: Basketball) => {
  return {
    name: `${match.participant1} - ${match.participant2}`,
    score: match.score.flat().join()
  }
}

const tennisParser = (match: Tennis) => {
  return {
    name: `${match.participant1} vs ${match.participant2}`,
    score: scoreParserWithSets(match.score)
  }
}

export const matchesParser = (match: Matches) => {
  switch (match.sport) {
    case 'soccer':
      return soccerParser(match)
    case 'volleyball':
      return volleyballParser(match)
    case 'handball':
      return handballParser(match)
    case "basketball":
      return basketballParser(match)
    case "tennis":
      return tennisParser(match)
    case "ski jumping":
    default:
      return undefined
  }
}