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

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let beginningHorizontal = return eastWest.indexOf(this.beginningLocation.horizontal);
    let endingHorizontal = return eastWest.indexOf(this.endingLocation.horizontal);
    let horizontalBlocks = Math.abs(beginningHorizontal - endingHorizontal);
    let verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalBlocks + verticalBlocks;
  };

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    };
  };
};
