let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    let enteredYear = new Date(year, 1, 1);
    let totalYears = (enteredYear - this.startDate) / (365*24*60*60*1000);
    return parseInt(totalYears);
  };
};
/*
class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  calculateHorizontal(avenue) {
    return eastWest.indexOf(avenue);
  };

  blocksTravelled() {
    let horizontalBlocks = this.calculateHorizontal(this.beginningLocation.horizontal) - this.calculateHorizontal(this.endingLocation.horizontal);
    let verticalBlocks = this.beginningLocation.vertical - this.endingLocation.vertical;
    return (Math.abs(horizontalBlocks) + Math.abs(verticalBlocks));
  };

  estimatedTime(true) {
    if (true) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    };
  };
};
*/
