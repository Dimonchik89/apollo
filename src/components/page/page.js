// import { gql, useQuery } from "@apollo/client";

// const GET_DATA = gql`
//   query {
//     getAllConversations {
//       name
//     }
//   }
// `;

// const Page = () => {
//   const { loading, error, data } = useQuery(GET_DATA);
//   console.log(data);

//   return <h3>1</h3>;
// };

// export default Page;

import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  query {
    signIn(password: "", email: "") {
      user {
        id
        login
      }
      token
    }
  }
`;

const Page = () => {
  const { loading, error, data } = useQuery(GET_DATA);
  const token = data?.signIn?.token;
  console.log(token);
  localStorage.setItem("TOKEN", token);

  return <h3>1</h3>;
};

export default Page;
