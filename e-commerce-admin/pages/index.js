import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data : session} = useSession();
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h1>
        Hello, <b>{session?.user?.name}</b>
      </h1>
      <div className="flex bg-gray-300 text-black rounded-md overflow-hidden h-6">
        <img src={session?.user?.image} className="w-6 h-6"/>
        <span className="px-2">
          {session?.user?.name}
        </span>
      </div>
    </div>
  </Layout>
}