// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  return Math.abs(destination - 42)
}

function distanceFromHqInFeet(destination) {
  return (distanceFromHqInBlocks(destination) * 264)
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
  switch (fare) {
    case distanceTravelledInFeet <= 400:
    return 0;
    case distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000:
    return distanceTravelledInFeet * .02;
    case distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500:
    return 25;
    case distanceTravelledInFeet > 2500:
    return 'cannot travel that far'

  }
}
