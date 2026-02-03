import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({allLightsOn, allLightsOff,allOff, allOn}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={allOff}
        onClick={()=> allLightsOff()}
      >
        {allOff ? 'All lights are already off' : 'Turn all lights off'}
      </Button>
      <Button
        type="button"
        disabled={allOn}
        onClick={()=> allLightsOn()}
      >
       {allOn ? "All lights are already on" : "Turn all lights on"}
      </Button>
    </StyledQuickActions>
  );
}
