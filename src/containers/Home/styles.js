import styled from "styled-components";
import Background1 from "../../assets/bg 1.svg";

export const Container = styled.div`
  background: url("${Background1}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  color: #eeeeee;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 34px;
  appearance: textfield;
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  margin-top: 132px;
  width: 342px;
  height: 74px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  &:hover {
    opacity: 0.9;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    opacity: 0.7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
