import { themes } from "./Theme";
import styled from "styled-components";

const DivWrapper = styled.div`
  color: ${themes.secondaryColor};
`;

export const OneJoke = (props: { value: string }) => {
  return <DivWrapper> {props.value}</DivWrapper>;
};
