import { Col, Container, Row } from "react-bootstrap";

export function Cards() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003, id: 0 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008, id: 1 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007, id: 2 },
    {
      name: "Company Four",
      category: "Retail",
      start: 1985,
      end: 2012,
      id: 3,
    },
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // for Each

  // companies.forEach((item) => {
  //   console.log(item);
  // });

  // const canDrink = ages.filter((item) => {
  //   return item >= 21 ? true : false;
  // });
  // console.log(canDrink);

  // const retailCompanies = companies.filter(
  //   (company, index) => company.category == "Retail" && company.id == index
  // );

  // const companyFromEighties = companies.filter(
  //   (company) => company.start >= 1980 && company.start <= 1990
  // );

  // const tenYearsOrMore = companies.filter(
  //   (company) => company.end - company.start >= 10
  // );

  // Create array of company names

  // const companyNames = companies.map((company) => {
  //   return 1;
  // });

  // const agesSquare = ages.map((age) => age * age);

  // const sortedCompanies = companies.sort((c1, c2) =>
  //   c1.start > c2.start ? 1 : -1
  // );

  const ageSum = ages.reduce((total, age) => total + age, 0);

  console.log(ageSum);

  return (
    <Container
      style={{ border: "1px solid black", height: "70vh", width: "120vh" }}
    >
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}
