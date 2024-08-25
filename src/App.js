import Box from "./component/Box";
import "./App.css";
import { useSelector } from "react-redux";
import { Progress } from "@nextui-org/react";

function App() {
  const count = useSelector((state) => state.count);
  return (
    <div className="w-screen h-screen flex flex-col justify-center bg-red-200">
      <div className="flex flex-col m-auto gap-10 bg-white p-20 rounded-xl max-sm:mx-2">
        <h1 className="mx-auto font-bold text-5xl">🎵BPM 끌어올렷🔥</h1>
        <h1 className="mx-auto font-bold text-5xl">{count} %</h1>
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
