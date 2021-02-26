export const fetchData = async () => {
  try {
    const response = await fetch(
      'https://msdrop.com.ua/export/RWwn/json '
    );
    console.log(response)
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
