function dndWikidotUrlFromRace(raceStr) {
  return `https://dnd5e.wikidot.com/lineage:${raceStr.replace("(","").reaplce(")","").replace(" ","-")}`;
}