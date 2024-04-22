import React from "react";
import cn from "classnames";
import styled from "styled-components";

import { useBoard } from "../../context/useBoard";

const Pencil = styled.div`
  align-items: center;
  border-radius: 100%;
  color: gray;
  cursor: pointer;
  display: flex;
  font-size: 2em;
  height: 48px;
  justify-content: center;
  width: 48px;

  &.editMode {
    background-color: darkgray;
    color: white;
  }
`;

const Panel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 45px;
  justify-content: space-evenly;
  max-width: 360px;
  margin: 0;
`;

const ControlPanelField = styled.div`
  color: #00000094;
  font-size: 0.75rem;
`;

export const ControlPanel = () => {
  const [len, setLen] = React.useState(0);
  const cTime = Math.min(Math.floor(len), 1800);
  const { actions, difficulty, editMode, errors, time } = useBoard();

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    const currentTime = () =>
      time && setLen((new Date().getTime() - time) / 1000);

    if (time) {
      interval = setInterval(currentTime, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [time]);

  return (
    <Panel>
      <ControlPanelField className="control-panel__difficulty">
        <div>Difficulty:</div>
        <div>{Math.floor(8 - difficulty * 10.1)}</div>
      </ControlPanelField>
      <ControlPanelField className="control-panel__errors">
        <div>Errors:</div>
        <div>{errors}</div>
      </ControlPanelField>
      <ControlPanelField className="control-panel__time">
        <div>Time</div>
        <div>
          {Math.floor(cTime / 60)}:{cTime % 60 < 10 ? "0" : ""}
          {cTime % 60}
        </div>
      </ControlPanelField>
      <Pencil className={cn({ editMode })} onClick={actions?.toggleEditMode}>
        &#9998;
      </Pencil>
    </Panel>
  );
};
