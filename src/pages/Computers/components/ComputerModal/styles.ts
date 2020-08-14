import styled from 'styled-components';

interface AlphaProps {
  modalVisible: boolean;
}

export const Alpha = styled.div<AlphaProps>`
  z-index: 1;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  height: 100%;
  width: 100%;
  display: ${({ modalVisible }) => (modalVisible ? 'flex' : 'none')};
`;
export const Popup = styled.div`
  display: column;
  width: 20%;
  height: 18em;
  background-color: white;
  border-radius: 7px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const PopupContentTop = styled.div`
  height: 12%;
  width: 100%;
  padding: 8px;
  text-align: center;
  border-radius: 7px 7px 0 0;
  font-size: 20px;
  margin-top: 20px;
`;

export const PopupContentDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PopupContentMid = styled.div`
  height: 12%;
  width: fit-content;
  text-align: center;
  font-size: 20px;
`;

export const PopupContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  svg {
    font-size: 70px;
  }
`;
export const PopupStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  margin-left: 5px;
  background-color: #2ddb72;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
