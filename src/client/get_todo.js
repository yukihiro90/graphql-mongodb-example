import axios from 'axios';

axios
  .get('http://localhost:3000/graphql', {
    params: {
      query: `{
        todo(id: "57a32a2faf0c42c5aab07808") {
          id
          title
          completed
        }
      }`,
    },
  })
  .then((res) => {
    console.log(JSON.stringify(res.data, null, "\t"));
  })
  .catch((err) => {
    console.log(err);
  });
