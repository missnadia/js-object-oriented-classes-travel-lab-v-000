let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

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
    let horizontalBlocks = Math.abs(this.beginningLocation.horizontal - this.endingLocation.horizontal);
    let verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalBlocks + verticalBlocks
  };

  estimatedTime() {
    
  };
};
