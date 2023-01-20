import styled from "styled-components";

export const MainCadastro = styled.div`
  background-color: #121214;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  padding: 20px 10px 20px 10px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 370px;
  max-width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Select = styled.select`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 17px;
  gap: 10.15px;
  margin: 20px 0px;
  width: 330px;
  max-width: 100%;
  height: 48px;
  background: #343b41;
  border: 1.2182px solid #343b41;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: #f8f9fa;
`;

export const BtnVoltar = styled.button`
  width: 67.49px;
  height: 40.11px;
  background: #212529;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: #f8f9fa;
`;

export const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 42px 22px;
  gap: 22px;
  width: 370px;
  max-width: 100%;
  height: 80%;
  overflow-y: scroll;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 0 auto;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
    margin: 0 auto;
  }

  form label {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
    margin-top: 20px;
  }

  form {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  form input {
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 330px;
    max-width: 100%;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    margin-bottom: 5px;
    margin-top: 15px;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;
  }

  form span {
    font-size: 11px;
    color: pink;
    text-align: end;
  }

  form input:focus {
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }

  form button {
    padding: 0px 23px;
    width: 330px;
    max-width: 100%;
    height: 48px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4.06066px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    margin-top: 8px;
  }

  form button:hover {
    background: #ff427f;
  }

  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868e96;
    margin: 0 auto;
  }
`;
