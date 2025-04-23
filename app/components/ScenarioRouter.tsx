import { useScenarioStore } from '@/app/store/store';
import Scenario1 from '@/app/screens/scenarios/roundingInterface';
import Scenario2 from '@/app/screens/scenarios/fixedInterface';
import Scenario3 from '@/app/screens/scenarios/percentInterface';
import Scenario4 from '@/app/screens/scenarios/oldSchoolInterface';

export default function ScenarioRouter() {
  const { currentScenario } = useScenarioStore();

  switch(currentScenario) {
    case 1: return <Scenario1 />;
    case 2: return <Scenario2 />;
    case 3: return <Scenario3 />;
    case 4: return <Scenario4 />;
    default: return <Scenario1 />; // Fallback to Scenario1 if none match
  }
}