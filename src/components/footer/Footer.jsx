import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="inner-footer">
        <h2>Footer</h2>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  margin-top: auto;
`;
