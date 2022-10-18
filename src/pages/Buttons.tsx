import axios from "axios";

export function Buttons() {
  interface postprops {
    title: string;
    body: string;
  }

  const posts = [
    { title: "post one", body: "This is post one " },
    { title: "post two", body: "This is post two " },
  ];

  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post) => (output += `<li> ${post.title}</li>`));
      document.body.innerHTML = output;
    }, 1000);
  }

  const createPost = (post: postprops) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false;
        if (!error) {
          resolve("Something");
        } else {
          reject("Error: Something went wrong");
        }
      }, 2000);
    });
  };

  // Async / Await

  const init = async () => {
    await createPost({ title: "post three", body: "This is post one " });

    getPosts();
  };
  init();

  const getUsers = async () => {
    const json = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await json.json();
    console.log(data);
  };

  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => console.log(res.data));
  };

  getData();

  const sendData = () => {
    axios
      .post("https://reqres.in/api/register", {
        email: "eve.holt@reqres.in",
        // password: "pistol",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  sendData();
  //   .then(getPosts)
  //   .catch((err) => console.log(err));
  // const promise1 = Promise.resolve("Hello World");
  // const promise2 = 10;
  // const promise3 = new Promise((res, rej) => setTimeout(res, 2000, "GoodBye"));

  // Promise.all([promise1, promise2, promise3]).then((values) =>
  //   console.log(values)
  // );

  return <div className="d-grid gap-5"></div>;
}
