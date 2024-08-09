import "./App.css";

function Render() {
    const names = [
        "Nikita", "Sneha", "Shraddha", "Poonam"
    ];

    const Listofnames = names.map(name => <li key={name}>{name}</li>);

    const person = {
        firstName: "Nikita",
        lastName: "Choudhari",
        age: 20,
        profession: "Software Engineer",
        greet: function() {
            console.log("Hello, my name is " + this.firstName + " " + this.lastName);
        }
    };

    const data = [
        {
            Name: "Nikita",
            Marks: "98",
            Phone: "123",
        },
        {
            Name: "Pratiksha",
            Marks: "96",
            Phone: "127",
        },
        {
            Name: "Muskan",
            Marks: "97",
            Phone: "163",
        },
        {
            Name: "Nishi",
            Marks: "95",
            Phone: "193",
        },
        {
            Name: "Himanshu",
            Marks: "78",
            Phone: "120",
        },
    ];

    // Render rows/items
    const tableRows = data.map((element, index) => {
        return (
            <tr className="items" key={index}>
                <td>{element.Name}</td>
                <td>{element.Marks}</td>
                <td>{element.Phone}</td>
            </tr>
        );
    });

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
            <ul>{Listofnames}</ul>
            <div>{person.greet()}</div>
        </div>
    );
}

export default Render;
