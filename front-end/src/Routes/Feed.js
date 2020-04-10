import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLike
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createAt
    }
  }
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);
  return "FEED";
};
