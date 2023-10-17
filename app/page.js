import Image from "next/image";
import styles from "./page.module.css";
import Authentication from "./Authentication/page";

export default function Home() {
  return (
    <>
      <Authentication />
    </>
  );
}
