const API_URL = "http://localhost/SI_workout-main/backend/api/";

export const postData = async (endpoint, data) => {
  const res = await fetch(API_URL + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
