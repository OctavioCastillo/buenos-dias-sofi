
import { useState } from "react";
import { AnimatePresence } from "motion/react";

import Decorations from "./components/Decorations";
import WelcomePage from "./pages/WelcomePage";
import GreetingPage from "./pages/GreetingPage";
import FinalPage from "./pages/FinalPage";

function App() {
  const [page, setPage] = useState(1);

  function restart() {
    setPage(1);
  }

  return (
    <main className="relative flex min-h-screen min-h-dvh items-center justify-center overflow-hidden bg-[#FFF9E9] px-5 py-10 text-[#574A30]">
      <Decorations />

      <AnimatePresence mode="wait">
        {page === 1 && (
          <WelcomePage
            key="welcome"
            onContinue={() => setPage(2)}
          />
        )}

        {page === 2 && (
          <GreetingPage
            key="greeting"
            onContinue={() => setPage(3)}
          />
        )}

        {page === 3 && (
          <FinalPage
            key="final"
            onRestart={restart}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
