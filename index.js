import fs from "fs";
import ical from 'ical-generator';

const calendar = ical({name: 'jost kalendar'});




const file = fs.readFileSync('dates.txt', 'utf-8');
file.split(/\r?\n/).forEach(line =>  {
  format(line);
});


function format(line) {
    let s = line.split(":")

    let name = s[0];

    let s2 = s[1].split(",");

    let date = new Date(s[1]);
    let end = new Date(date.getHours() + 1);

    console.log(date);

    calendar.createEvent({
        start: date,
        summary: name,
        description: "Something"
    })
    
}

calendar.saveSync("dates.ical")