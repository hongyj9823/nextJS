"use client";

import Image from "next/image";
// 전체 루트 페이지
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Nct wish gallery</h1>
      <Image src="/wish.jpg" alt="wish" width={800} height={600} />
      <button
        onClick={() => router.push("/gallery")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Move to Gallery
      </button>
    </main>
  );
}
