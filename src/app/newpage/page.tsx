
import Image from "next/image";

const Home = () => {
  return (
    <main className="p-2 w-[1440px] mx-auto border-2 h-[100vh]">
      This is newpage
      <Image src="/flo.jpg" alt="image" width={300}  height={0} />

    </main>
  );
};

export default Home;
