import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartColumn,
  faGear,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { useModal } from "../../context/useWordleModal";

const HeaderWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid black;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: space-between;
  padding: 0 16px;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderTitle = styled.div`
  font-family: sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  left: 0;
  letter-spacing: 1px;
  line-height: 100%;
  pointer-events: none;
  right: 0;
  text-align: center;
`;

interface HeaderInterface {
  title?: string;
}

const Header = React.memo(({ title = "GenOrdle" }: HeaderInterface) => {
  const { setCurrentModal } = useModal();

  return (
    <HeaderWrapper>
      <HeaderRow>
        <FontAwesomeIcon
          className="header__icon"
          icon={faBars}
          onClick={() => setCurrentModal(1)}
          size="2x"
        />
        <FontAwesomeIcon
          className="header__icon"
          icon={faQuestion}
          onClick={() => setCurrentModal(2)}
          size="2x"
        />
      </HeaderRow>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRow>
        <FontAwesomeIcon
          className="header__icon"
          icon={faChartColumn}
          onClick={() => setCurrentModal(3)}
          size="2x"
        />
        <FontAwesomeIcon
          className="header__icon"
          icon={faGear}
          onClick={() => setCurrentModal(4)}
          size="2x"
        />
      </HeaderRow>
    </HeaderWrapper>
  );
});

export default Header;
