import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 850px;
  height: 100%;
  margin: 20px 0 20px 0;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${colors.terciary};
  padding: 40px 30px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const MobileWarning = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
`;

export const ImageChooserContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 10px;
`;

export const ScrollMenu = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;

interface ImageProps {
  active: boolean;
}

export const Image = styled.img<ImageProps>`
  height: 190px;
  width: 190px;

  margin: 0 11px 12px 0;
  border: solid 3px ${(props) => (props.active === false ? colors.terciary : colors.primary)};
  border-radius: 8px;

  background-color: ${colors.background};

  cursor: pointer;

  &:hover {
    border: solid 3px ${(props) => (props.active === false ? colors.lightprimary : colors.primary)};
  }
`;

export const Input = styled.input`
  height: 50px;

  margin-top: 10px;
  padding: 16px 12px;

  border-style: none;

  color: rgba(0, 0, 0, 0.6);
  background-color: ${colors.background};

  font-family: 'Roboto';
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  height: 200px;
  width: 100%;

  margin-top: 10px;
  padding: 15px;

  border-style: none;
  outline: none;
  resize: none;

  text-align: top;
  font-family: 'Roboto';
  font-size: 14px;

  color: rgba(0, 0, 0, 0.6);
  background-color: ${colors.background};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 250px;
  align-self: flex-end;
  justify-content: space-around;
  margin-top: 15px;
`;

export const PublishButton = styled.button`
  padding: 9px 27px;

  font-weight: bold;

  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  border-radius: 30px;
  background-color: white;

  transition: 0.3s;
  &:hover {
    color: ${colors.terciary};
    background-color: ${colors.primary};
  }
`;

export const CancelButton = styled.button`
  padding: 9px 27px;

  font-weight: bold;

  color: ${colors.red};

  border: 2px solid ${colors.red};
  border-radius: 30px;
  background-color: white;

  transition: 0.3s;

  &:hover {
    color: ${colors.terciary};
    background-color: ${colors.red};
  }
`;

export const Title = styled.span`
  margin-top: 10px;

  font-size: 20px;
  font-family: 'Ubuntu';
  font-weight: 500;

  color: ${colors.dark};
`;

export const WarningTypeContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  height: 50px;
`;

export const WarningTypeTitle = styled.span`
  font-size: 24px;
  font-family: 'Ubuntu';
  font-weight: 500;

  color: ${colors.dark};
`;

export const WarningTypeDropdown = styled.select`
  height: 40px;
  width: 200px;

  padding: 10px;

  font-family: 'Roboto';
  font-weight: bold;
  color: ${colors.dark};

  outline: none;
  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;

  background-color: ${colors.background};
`;

interface RoomOptionContainerProps {
  visible: boolean;
}

export const RoomOptionContainer = styled.div<RoomOptionContainerProps>`
  display: ${(props) => (props.visible === true ? 'flex' : 'none')};
  justify-content: space-between;

  margin-top: 10px;
`;

interface ComputerOptionContainerProps {
  visible: boolean;
}

export const ComputerOptionContainer = styled.div<ComputerOptionContainerProps>`
  display: ${(props) => (props.visible === true ? 'flex' : 'none')};
  justify-content: space-between;

  margin-top: 10px;
`;

interface LibraryOptionContainerProps {
  visible: boolean;
}

export const LibraryOptionContainer = styled.div<LibraryOptionContainerProps>`
  display: ${(props) => (props.visible === true ? 'flex' : 'none')};
  flex-direction: column;

  justify-content: space-between;

  margin-top: 10px;
  height: 90px;
`;

export const OptionDropdown = styled.select`
  height: 40px;
  width: 300px;

  padding: 10px;

  font-family: 'Roboto';
  font-weight: bold;
  color: ${colors.dark};

  outline: none;
  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;

  background-color: ${colors.background};
`;

export const DateOptionContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10px;
`;

export const DateDropdown = styled.select`
  height: 40px;
  width: 150px;

  padding: 10px;

  font-family: 'Roboto';
  font-weight: bold;
  color: ${colors.dark};

  outline: none;
  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;

  margin-right: 10px;

  background-color: ${colors.background};
`;

interface DateInputProps {
  visible?: boolean;
}

export const DateInput = styled.input<DateInputProps>`
  display: ${(props) => (props.visible === false ? 'none' : 'flex')};

  height: 40px;
  max-width: 181px;

  padding: 5px;

  outline: none;
  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;

  margin-right: 10px;

  background-color: ${colors.background};
`;

export const HourInput = styled.input<DateInputProps>`
  display: ${(props) => (props.visible === false ? 'none' : 'flex')};

  height: 40px;
  max-width: 60px;

  padding: 10px;

  outline: none;
  border: solid 0.5px rgba(50, 44, 66, 0.5);
  border-radius: 5px;

  background-color: ${colors.background};
`;
