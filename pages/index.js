import Header from "../components/Header";
import Search from "../components/Search";
import { chatRooms } from "../data/chatRooms";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full mt-5">
      <Header />
      <div className="flex justify-between max-w-[1100px] mx-auto">
        <div>
          <div className="space-y-10">
            <Search />
            <div className="p-5 w-80 bg-[#0D0D0D] rounded-xl text-gray-300">
              <h1 className="font-semibold text-lg mb-5">Groups</h1>

              <div className="flex items-center justify-start gap-5 pb-5 border-b-[1px] border-gray-700">
                <div className="w-10 h-10 rounded-full bg-white"></div>
                {chatRooms.map((room) => {
                  <div key={room.id}>
                    <Link ref={`/room/${room.id}`}>{room.title}</Link>
                  </div>;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* chat box */}
        <div className="p-5 w-[750px] bg-[#0D0D0D] rounded-xl text-gray-300">
          <h1 className="font-semibold text-lg mb-5">Chats</h1>
        </div>
      </div>
    </main>
  );
}

// redirect if token empty
export async function getServerSideProps(ctx) {
  const token = ctx.req.headers.cookie;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/register",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
