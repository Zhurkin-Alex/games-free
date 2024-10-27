function randomInt(min: number = 0, max: number = 0): number {
  if (!min && !max && max !== 0) {
    return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  }

  // max included
  return Math.floor(
    Math.random() * ((+max || 0) + 1 - (+min || 0)) + (+min || 0),
  );
}

export default randomInt;
