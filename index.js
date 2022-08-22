// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2012", result: "L" },
]

function superbowlWin(record) {

    var teamFate;

    if (teamFate = record.find(item => item.result === "W")) {
        return (teamFate.year);
    }
    else {
        return (undefined);
    }

    // let result = record.find(record => record.result === "W");

    // const teamFate = result ? result.year : underfined;
    // return teamFate;
}
superbowlWin(record);