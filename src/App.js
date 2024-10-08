import Box from "./component/Box";
import "./App.css";
import { useSelector } from "react-redux";
import { Progress } from "@nextui-org/react";

function App() {
  const count = useSelector((state) => state.count);
  return (
    <div className="w-screen h-screen flex flex-col justify-center bg-red-200">
      <div className="flex flex-col m-auto gap-10 bg-white p-20 rounded-xl max-sm:mx-2 shadow-2xl shadow-[#ff3773]/50">
        <h1 className="mx-auto font-medium text-sm text-pink-300 neonText mb-4">🩷내가 좋아하는 노래🩷</h1>
        <h2 className="mx-auto font-bold text-5xl max-sm:text-xl">🎵BPM 끌어올렷🔥</h2>
        <h2 className="mx-auto font-bold text-5xl">{count} %</h2>
        <Progress
          aria-label="filling..."
          size="md"
          value={count}
          color="danger"
          label="let's go!"
          showValueLabel={true}
          classNames={{
            base: "max-w-md mx-auto",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-pink-500 to-blue-400",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
        />
        <Box />
      </div>
    </div>
  );
}

export default App;
