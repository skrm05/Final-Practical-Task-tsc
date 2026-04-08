import { useEffect, useState } from "react";

type geo = {
  lat: string;
  lng: string;
};
type address = {
  street: string;
  suit: string;
  city: string;
  zipcode: string;
  geo: geo;
};
type company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
type usersData = {
  id: number;
  name: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: company;
};
const HandleApi = () => {
  const [usersData, setUsersData] = useState<usersData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.status == 200) {
        const data = await res.json();
        console.log(data);
        setUsersData(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        throw new Error("Resources not found");
      }
    } catch (error) {
      setErr((error as Error).message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (isLoading) return <p style={{ color: "yellow" }}>Loading.......</p>;
  else if (err) return <p style={{ color: "red" }}>{err}</p>;
  else {
    return (
      <>
        <ul>
          {usersData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }
};

export default HandleApi;
