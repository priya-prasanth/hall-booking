import express from "express"
import cors from "cors"


const app = express();
const PORT = 4000;

app.use(cors());
//app.listen(PORT, () => {
    //console.log("App is listening at-",PORT)
//})
app.use(express.json())

const room = {
    NumberofSeatsavailable: 200,
    Amenities_in_Room: "A/C or non A/C, Attached bathroom, TV with cable, Dining options",
    Price_1_hour: 1000,
}

const data = [
    {
        Roomname: "Shriya hall",
        Room_Id: 1100,
        Booked_Status: "booked",
        Customer_name: "Deeksha",
        Booked_date: "1/10/23",
        Entry_time: "9AM",
        Exit_time: "12.30PM",
    },
    {
        Roomname: "Shriya hall",
        Room_Id: 101,
        Booked_Status: "booked",
        Customer_name: "Raksha",
        Booked_date: "3/10/23",
        Entry_time: "8AM",
        Exit_time: "1.00PM",
    },
      {
        Roomname: "Shriya hall",
        Room_Id: 102,
        Booked_Status: "booked",
        Customer_name: "Shreeja",
        Booked_date: "4/10/23",
        Entry_time: "11AM",
        Exit_time: "6.00PM",
    }, 
      {
        Roomname: "Shriya hall",
        Room_Id: 103,
        Booked_Status: "booked",
        Customer_name: "Adhwaith",
        Booked_date: "5/10/23",
        Entry_time: "8AM",
        Exit_time: "3.30PM",
    },
      {
        Roomname: "Shriya hall",
        Room_Id: 104,
        Booked_Status: "booked",
        Customer_name: "Pragen",
        Booked_date: "6/10/23",
        Entry_time: "6AM",
        Exit_time: "11.00PM",
    },
    {
        Roomname: "Shriya hall",
        Room_Id: 105,
        Booked_Status: "booked",
        Customer_name: "Priya",
        Booked_date: "6/10/23",
        Entry_time: "10.40AM",
        Exit_time: "3.30PM",
    },
    {
        Roomname: "Shriya hall",
        Room_Id: 106,
        Booked_Status: "booked",
        Customer_name: "Prasanth",
        Booked_date: "8/10/23",
        Entry_time: "9.45AM",
        Exit_time: "4.00PM",
    },
    {
        Roomname: "Shriya hall",
        Room_Id: 107,
        Booked_Status: "booked",
        Customer_name: "Kumaran",
        Booked_date: "9/10/23",
        Entry_time: "10AM",
        Exit_time: "5.40PM",
    },
    {
        Roomname: "Shriya hall",
        Room_Id:  108,
        Booked_Status: "booked",
        Customer_name: "Sumathi",
        Booked_date: "10/10/23",
        Entry_time: "11.15AM",
        Exit_time: "8.30PM",
    },
]

app.get("/", function (request, response) {
    response.send("Welcome to hall booking app");
});

app.get("/roomData", function (request, response) {
    response.send(data);
});


app.get("/rooms", function (request, response) {
    response.send(room);
});

app.get("/booked-details", function (request, response) {
    const obj = data.map(
        ({ Room_Id, Customer_name, Booked_date, Entry_time, Exit_time }) => {
            const fg = {
                Room_Id: Room_Id,
                Customer_name: Customer_name,
                Booked_date: Booked_date,
                Entry_time: Entry_time,
                Exit_time:Exit_time,
            }
        })
    response.send(data);
});

app.post("/to-book-hall", express.json(), function (request, response) {
    let count = 0;
    const newVal = request.body;
    data.filter(({ Booked_date, Entry_time, Exit_time }) => {
        if (
            Booked_date === newVal.Booked_date &&
            Entry_time === newVal.Entry_time &&
            Exit_time === newVal.Exit_time
        ) {
            count++;
        }
    });
    if (count == 0) {
        data.push(newVal);
        response.send("Data added");
    } else {
        response.send("Sorry! There's no room in this particular Date and Time");
    }
    console.log(newVal);
    console.log(count);
});

app.listen(PORT, () => {
    console.log("Connected to the Server-",PORT)
});