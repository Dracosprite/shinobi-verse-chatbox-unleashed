
import { useEffect } from 'react';
import ChatBox from "@/components/ChatBox";

const Index = () => {
  useEffect(() => {
    document.title = "Shinobi Verse Chat | Naruto Fan Hub";
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-6">
      <header className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-naruto-orange mb-2">
          Shinobi Verse Chat
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Connect with Naruto fans from across the ninja world! Share your thoughts, theories, and favorite moments.
        </p>
      </header>
      
      <main className="flex-1 flex items-start justify-center">
        <ChatBox />
      </main>
      
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>© 2025 Shinobi Verse Chat | Naruto Fan Hub</p>
        <p className="mt-1">For Naruto fans, by Naruto fans. Not affiliated with the official Naruto franchise.</p>
      </footer>
    </div>
  );
};

export default Index;
