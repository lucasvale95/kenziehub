import styled from "styled-components";

export const Main = styled.div`
  background-color: #121214;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 20px 42px 20px;
  justfy-content: center;
  align-items: flex-start;
  gap: 22px;
  width: 370px;
  height: 502px;
  margin: 0 auto;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
    margin: 0 auto;
  }

  form {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  form label {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
    margin-top: 10px;
  }

  form input {
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 330px;
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
    margin-bottom: 15px;
  }

  form input:focus {
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }

  form button {
    padding: 0px 23px;
    width: 330px;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
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

  .cadastro {
    padding: 0px 22.3336px;
    gap: 10.15px;
    width: 330px;
    height: 48px;
    background: #868e96;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }

  .cadastro:hover {
    background: #343b41;
    border: 1.2182px solid #343b41;
  }
`;
