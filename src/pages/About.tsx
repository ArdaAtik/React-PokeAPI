import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import data from "./data.json";

export function About() {
  // type JSON_type = {
  //   id: number;
  //   age: number;
  //   name: string;
  //   surname: string;
  //   city: string;
  // };

  // const [found, setFound] = useState(() => data.find((item) => item.id > 1));

  // useEffect(() => {
  //   setFound(data.find((item) => item.id > 0));
  // }, [data]);

  // const ages: number[] = [];

  // console.log("data Array index 0 : ", ...data);

  // data.map((item) => ages.push(item.age));

  // const total = ages.reduce((accumulator, currValue) => {
  //   return accumulator + currValue;
  // }, 0);

  // interface objProps {
  //   name: string;
  //   price: number;
  //   amount: number;
  //   location: string;
  //   favoriteFood?: string;
  // }

  // const iterableObj: objProps = {
  //   name: "Computer",
  //   price: 2045,
  //   amount: 20,
  //   location: "London",
  // };

  // const newIterableObj: objProps = {
  //   ...iterableObj,
  //   favoriteFood: "Watermelon",
  // };
  // console.log(newIterableObj);

  return (
    <>
      {/* <div>
        {data.map((data: JSON_type) => (
          <Card>
            <Card.Body>
              <Card.Title>
                {data.name} {data.surname}
              </Card.Title>
              <Card.Header>
                <div>Location : {data.city}</div>
                <div>Age : {data.age}</div>
              </Card.Header>
              <Card.Footer>ID : {data.id}</Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <div>{JSON.stringify(newIterableObj)}</div>
      </div> */}
    </>
  );
}
