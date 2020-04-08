//isLoggenIn 관리 true, false

export const defaults = {
  //   isLoggenIn: localStorage.getItem("token") !== null ? true : false
  isLoggenIn: Boolean(localStorage.getItem("token")) || false //String이 있으면 true, null이면 false
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggenIn: true
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    }
  }
};
