import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;

  .modal-box {
    width: 370px;
    max-width: 100%;
    height: 342px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    position: relative;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  padding-left: 20px;

  background: #343b41;
  border-radius: 4px 4px 0px 0px;

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }

  .close-button {
    position: absolute;
    top: 11px;
    right: 20px;
    width: 30px;
    height: 30px;

    border: none;
    color: #868e96;
    background: #343b41;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 22px;
  padding: 25px 22px;

  label {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
  }

  input {
    width: 330px;
    max-width: 100%;
    height: 48px;

    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    padding-left: 20px;

    font-size: 20px;

    color: #f8f9fa;
  }

  select {
    width: 330px;
    max-width: 100%;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    padding-left: 20px;
    padding-right: 20px;

    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;
  }

  button {
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 330px;
    max-width: 100%;
    height: 48px;

    background: #ff577f;

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }
`;
