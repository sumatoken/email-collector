import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [info, setInfo] = useState({
    email: "",
    group: "",
  });
  useEffect(() => {
    console.log(info);

    return () => {};
  }, [info]);
  const handleSubmit = async () => {
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((res) =>
          toast.success("Enregistré avec succès", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
    } catch (error) {
      toast.error("Quelque chose s'est mal passé!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Inscrivez pour une séance de rattrapage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <div className="flex flex-col items-center align-center justify-center  mt-6 mb-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          S'inscrire à une séance TD de rattrapage{" "}
          <span className="text-blue-600 dark:text-blue-500">
            de physique des matériaux.
          </span>{" "}
        </h1>

        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Votre email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
              onChange={(e) =>
                setInfo({ ...info, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="group"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Votre groupe de TD{" "}
            </label>
            <input
              type="number"
              name="group"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setInfo({ ...info, [e.target.name]: e!.target.value })
              }
              required
            />
          </div>

          <button
            type="button"
            onClick={(e) => handleSubmit()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            S'inscrire
          </button>
        </form>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
