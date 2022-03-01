import { themes } from "./Theme";
import styled from "styled-components";

//STYLE//

const DivWrapper = styled.div`
  color: ${themes.secondaryColor};
`;

//CODE//

export const OneJoke = (props: { value: string }) => {
  return <DivWrapper> {props.value}</DivWrapper>;
};
