import { FC,PropsWithChildren } from "react";
import Head from "next/head";
import {Navbar} from "../Navbar"
import styles from "./MainLayout.module.css";
 
type Props = {
  children?: React.ReactNode
};

export const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
