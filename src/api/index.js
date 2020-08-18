export const loadUsersApi = async () => {
  const response = await fetch(
    "https://dummy.restapiexample.com/api/v1/employees"
  );
  const jsonResponse = await response.json();
  return jsonResponse.data;
};
