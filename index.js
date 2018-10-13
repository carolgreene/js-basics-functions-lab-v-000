// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  return Math.abs(destination - 42)
}

function distanceFromHqInFeet(destination) {
  return (distanceFromHqInBlocks(destination) * 264)
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end) * 264)
}
