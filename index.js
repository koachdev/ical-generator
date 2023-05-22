import fs from "fs";
import ical from 'ical-generator';
import moment from "moment";

const calendar = ical({name: 'jost kalendar'});




const file = fs.readFileSync('dates.txt', 'utf-8');
file.split(/\r?\n/).forEach(line =>  {
  format(line);
});


function format(line) {
    let s = line.split(":")

    let name = s[0];

    if (s[1] == undefined) {
        return;
    }

    let sd = s[1].split(",")

    let d = sd[1] + sd[2];

    let date = moment(d, "DD MMMM YYYY, HH:mm:ss");
    let end = moment(d, "DD MMMM YYYY, HH:mm:ss");
    date.add(1, "hour")
    end.add(2, "hour")



    calendar.createEvent({
        start: date.toDate(),
        end: end.toDate(),
        summary: name,
        description: "Something"
    })
    
}

calendar.saveSync("dates.ical")
