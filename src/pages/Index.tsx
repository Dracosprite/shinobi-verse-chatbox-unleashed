
import { useEffect } from 'react';
import ChatBox from "@/components/ChatBox";

const Index = () => {
  useEffect(() => {
    document.title = "Shinobi Verse Chat | Naruto Fan Hub";
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-6 bg-gradient-to-br from-naruto-orange/10 to-naruto-red/10">
      <header className="mb-6 text-center bg-naruto-orange/20 rounded-lg p-4">
        <h1 className="text-4xl font-bold text-naruto-orange mb-2 animate-[jutsu-appear_0.5s_ease-out]">
          Shinobi Verse Chat
        </h1>
        <p className="text-naruto-black/70 max-w-md mx-auto">
          Connect with Naruto fans and chat like your favorite characters!
        </p>
      </header>
      
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <ChatBox />
        </div>
      </main>
      
      <footer className="mt-8 text-center text-sm text-naruto-black/50">
        <p>© 2025 Shinobi Verse Chat | Not affiliated with the official Naruto franchise</p>
      </footer>
    </div>
  );
};

export default Index;
