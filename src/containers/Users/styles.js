import styled from "styled-components";
import Background2 from "../../assets/bg 2.svg";

export const Container = styled.div`
  background: url("${Background2}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;

`;

export const Image = styled.img`
  margin-top: 30px;
`;



export const Button = styled.button`
  background: transparent;
  border-radius: 14px;
  margin-top: 149px;
  width: 342px;
  height: 74px;
  border: 1px solid #ffffff;
  border-radius: 14px;
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

  img{
    transform: rotateY(180deg);
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  margin-top: 25px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
