import styled from "styled-components";

export const Nav = styled.nav`
  width: 100 vw;
  height: 72px;

  background: #121214;
  border-bottom: 1px solid #212529;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    margin: 0 auto;
    width: 1000px;
    max-width: 100%;
    height: 72px;

    button {
      padding: 0px 16.2426px;
      gap: 10.15px;
      width: 70px;
      height: 40px;
      background: #212529;
      border-radius: 4px;
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      color: #f8f9fa;
    }

    button:hover {
      background: #868e96;
    }
  }

  @media (max-width: 1000px) {
    padding: 0 5px;
  }
`;

export const Header = styled.header`
  width: 100 vw;
  height: 130px;

  background: #121214;
  border-bottom: 1px solid #212529;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 1000px;
    max-width: 100%;
    height: 130px;

    margin: 0 auto;

    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #f8f9fa;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: #868e96;
    }
  }
  @media (max-width: 1000px) {
    padding: 0 5px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 1000px;
  max-width: 100%;
  padding-top: 10px;

  margin: 0 auto;
  @media (max-width: 1000px) {
    padding: 0 5px;
  }
`;

export const Logout = styled.div`
  width: 100 vw;
  height: 100vh;

  display: flex;
  align-items: center;

  background: #121214;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
    margin: 0 auto;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #f8f9fa;
    }

    button {
      padding: 0px 16.2426px;
      gap: 10.15px;
      width: 70px;
      height: 40px;
      background: #212529;
      border-radius: 4px;
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      color: #f8f9fa;
    }

    button:hover {
      background: #868e96;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }

  button {
    background: #212529;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    border: 1px solid #212529;
    padding-top: 2px;
    padding-left: 2px;
  }

  button:hover {
    background: #343b41;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 605px;
  padding: 23px;
  background: #212529;
  border-radius: 4px;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;

    overflow: hidden;
  }
`;

export const Card = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 13px 20px;

  background: #121214;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 95%;

    h4 {
      font-weight: 700;
      font-size: 14.21px;
      line-height: 22px;
      color: #ffffff;
    }

    p {
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;
      color: #868e96;
    }
  }

  svg {
    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.8);

    :hover {
      cursor: pointer;
    }
  }
`;
