// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
      case "loggedinUser":
        return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };