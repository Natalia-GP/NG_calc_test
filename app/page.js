'use client';

import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  return (
    <>
      <h1>Bienvenido a esta App de cálculo
        <button className="button" type="button" onClick={() => router.push('/calc')}>Comenzar</button>
        {/* <Link href="/calc">Comenzar</Link> */}
      </h1>
    </>

  );
}
