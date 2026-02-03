import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
const rooms = [
  { name: "Living Room", id: "01", isOn: false },
  { name: "Kitchen", id: "02", isOn: false },
  { name: "Bedroom", id: "03", isOn: false },
  { name: "Bathroom", id: "04", isOn: false },
  { name: "Garage", id: "05", isOn: false },
  { name: "Porch", id: "06", isOn: false },
  { name: "Garden", id: "07", isOn: false },
  { name: "Office", id: "08", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(rooms);
  function toggleLight(id) {
    const updateData = lights.map((light) => {
      if (light.id === id) {
        return { ...light, isOn: !light.isOn };
      }
      return light;
    });
    setLights(updateData);
  }
  const litRoom = lights.filter((light) => light.isOn).length;

  function allLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }
  function allLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }
  const allOn = lights.every((light) => light.isOn);
  const allOff = lights.every((light) => !light.isOn);

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        litRoom={litRoom}
        allLightsOff={allLightsOff}
        allLightsOn={allLightsOn}
        allOff={allOff}
        allOn={allOn}
      />
    </Layout>
  );
}
