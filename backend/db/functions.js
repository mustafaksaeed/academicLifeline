export const createUser = async (data) => {
  try {
    const newUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    });
  } catch (err) {}
};
//firebase uid something here
