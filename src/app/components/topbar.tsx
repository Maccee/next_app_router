import Image from 'next/image';

const Topbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 w-[1440px] mx-auto">
      <div className="flex items-center">
        <Image src="/logo2.png" alt="image" width={50} height={50} />
        <div className="ml-2 font-bold text-4xl">ArchiDesk</div>
      </div>
      <div>
        Login
      </div>
    </nav>
  );
}

export default Topbar;
