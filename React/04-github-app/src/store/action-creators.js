import { getUsers } from "./api";
import { getSingleUser } from "./api";
import { userActions } from "./user-slice";

export const fetchAllUsers = (startFrom, amount) => {
  return async (dispatch) => {
    const BASE_URL = `https://api.github.com/users?per_page=${amount}&since=${startFrom}`;

    // ---START--- action here
    dispatch(userActions.isLoading(true));

    try {
      const response = await getUsers(BASE_URL);

      const userData = await response.json();

      // ---SUCCESS--- action here
      dispatch(userActions.fetchAll(userData));
      dispatch(userActions.isLoading(false));

      return userData;
    } catch (e) {
      // ---ERROR--- action here
      dispatch(
        userActions.hasError({
          status: "error",
          title: "Error!",
          message: e,
        })
      );
    }
  };
};

export const fetchSingleUser = (path) => {
  return async (dispatch) => {
    const BASE_URL = `https://api.github.com${path}`;

    // ---START--- dispatch action
    dispatch(userActions.isLoading(true));

    try {
      const response = await getSingleUser(BASE_URL);

      const userData = await response.json();

      // ---SUCCESS--- dispatch action
      dispatch(userActions.fetchSingle(userData));
      dispatch(userActions.isLoading(false));

      return userData;
    } catch (e) {
      // ---ERROR--- dispatch action
      dispatch(
        userActions.hasError({
          status: "error",
          title: "Error!",
          message: e,
        })
      );
    }
  };
};
