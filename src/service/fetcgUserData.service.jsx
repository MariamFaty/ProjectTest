import axios from "axios";
import { useState } from "react";

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
export const fetchUserData = async () => {
  setLoading(true);
  setError(null);
  try {
    const token = localStorage.getItem("accesstoken") || authContextaccessToken;
    if (!token) {
      throw new Error("No token found. Please log in again.");
    }

    // جلب البيانات باستخدام Axios
    const response = await axios.get(
      "https://educredit.runasp.net/api/User/GetUserInfo",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Fetched Data:", response.data);

    // تحديث البيانات
  } catch (error) {
    // معالجة الأخطاء
    if (error.response) {
      // الـ API أرجع استجابة مع خطأ (مثل 401 Unauthorized)
      setError(
        `Error ${error.response.status}: ${
          error.response.data.message || "Failed to fetch user data"
        }`
      );
    } else if (error.request) {
      // لم يتم تلقي استجابة من الـ API (مشكلة في الشبكة)
      setError("Network error: Could not reach the server.");
    } else {
      // أخطاء أخرى (مثل خطأ في الكود)
      setError(error.message);
    }
    console.error("Error fetching user data:", error);
  } finally {
    setLoading(false);
  }
};
