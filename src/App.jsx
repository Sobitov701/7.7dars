import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // useSelector qo'shildi
import { setUser } from "./lib/slices/usersSlices";
import UserList from "./componest/userList";

function App() {
  const dispatch = useDispatch();

  // Redux store'dan foydalanuvchilarni olish
  const users = useSelector((state) => state.users);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplacholder.typiconde.com/users");

        if (!res.ok) {
          throw new Error("API xatolik berdi: " + res.statusText);
        }

        const data = await res.json();
        dispatch(setUser(data)); // Redux store'ga ma'lumotni yuborish
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    getUsers();
  }, [dispatch]); // dispatch ni dependencylarga qo'shish

  return (
    <div>
      <h2 className="font-bold border-b-2 border-black/20 text-5xl py-3 text-center">
        User
      </h2>
      <UserList />
    </div>
  );
}

export default App;
