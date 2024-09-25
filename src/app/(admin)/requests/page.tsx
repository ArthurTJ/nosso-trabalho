"use client";
import Navbar from "@/components/Navbar";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

interface MyData {
  courseName: string;
  instituteName: string;
  location: string;
  link: string;
  email: string;
  date: string;
}

export default function Requests() {
  const { user } = useUser();

  const [data, setData] = useState<MyData[]>([]);

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/get-requests`
    );
    const apiData = response.data.documents;

    return apiData;
  };

  useEffect(() => {
    fetchData().then((apiData) => {
      setData(apiData);
      console.log(apiData);
    });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-theme-palette-400 to-theme-palette-600">
        <Navbar />
      </div>
      <SignedIn>
        {user?.id === "" ||
        user?.id === "user_2UGasqoG2WZStpDttaAC9Tju6n4" ? (
          <div className="max-w-5xl m-auto mt-10 overflow-scroll mx-2 sm:mx-auto">
            {data.map((item, index) => (
              <table key={index} className="max-w-5xl m-auto border-2">
                <thead className="border-2">
                  <tr>
                    <th className="px-2 py-2 border-2">Curso</th>
                    <th className="px-2 py-2 border-2">Universidade</th>
                    <th className="px-2 py-2 border-2">Lugar</th>
                    <th className="px-2 py-2 border-2">Link</th>
                    <th className="px-2 py-2 border-2">Email</th>
                    <th className="px-2 py-2 border-2">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-2">
                      <td className="px-2 py-2 border-2">{item.courseName}</td>
                      <td className="px-2 py-2 border-2">
                        {item.instituteName}
                      </td>
                      <td className="px-2 py-2 border-2">{item.location}</td>
                      <td className="px-2 py-2 border-2">{item.link}</td>
                      <td className="px-2 py-2 border-2">{item.email}</td>
                      <td className="px-2 py-2 border-2">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        ) : (
          <h2>Only Authorized</h2>
        )}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
