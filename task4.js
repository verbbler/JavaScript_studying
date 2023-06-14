//Implement and export by default a function that finds the winning team for a particular Super Series. The winner is determined as the team with the most wins (not the number of goals scored) in a particular series. The function takes an array as input, in which each element is an array describing the score in a particular game (how many goals Canada and the USSR scored). The result of the function is the name of the country: 'canada', 'ussr'. If the super series ended in a draw, then null should be returned.//

function getSuperSeriesWinner(arr) {
  let canada = 0,
    ussr = 0;
  arr.forEach(([a, b]) => a != b ? a > b ? canada++ : ussr++ : '');
  return canada != ussr ? canada > ussr ? 'canada' : 'ussr' : null;
}
export default getSuperSeriesWinner;
