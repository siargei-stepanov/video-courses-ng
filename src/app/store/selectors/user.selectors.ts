export const selectUser = (state) => state.user;

export const selectFullName = (state) => {
	return state.user?.user?.fullName;
};

export const selectIsAuthenticated = (state) => {
	return !!state.user.token;
};
