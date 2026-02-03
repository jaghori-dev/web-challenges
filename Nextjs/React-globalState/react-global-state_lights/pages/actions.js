import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ allLightsOn, allLightsOff, allOff, allOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        allLightsOff={allLightsOff}
        allLightsOn={allLightsOn}
        allOff={allOff}
        allOn={allOn}
      />
    </>
  );
}
