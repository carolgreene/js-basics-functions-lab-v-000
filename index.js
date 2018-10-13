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
  let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
    return 0;

  }
}
