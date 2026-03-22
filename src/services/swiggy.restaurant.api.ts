import axiosInstance from "../lib/axios";

const getRestautrantItems = async () => {
  try {
    const res = await axiosInstance.get(
      "/restaurants/list/v5?lat=15.1420&lng=76.92398&page_type=DESKTOP_WEB_LISTING",
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default getRestautrantItems;
