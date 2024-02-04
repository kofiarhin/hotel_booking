import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const getRooms = async () => {
      const res = await fetch("/rooms");
      if (res.ok) {
        const data = await res.json();

        console.log(data);
      }
    };

    getRooms();
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
