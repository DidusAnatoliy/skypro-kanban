import styled from "styled-components";

export const ThemeToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    
    p { 
      color: #000;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.14px;
    }

  input[type=checkbox] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #EAEEF6;
    outline: none;
    appearance: none;

    &::before {
       content: "";
       position: absolute;
       top: 1px;
       left: 1px;
       width: 11px;
       height: 11px;
       border-radius: 50%;
       background-color: #94A6BE;
       transition: 0.5s;
    }
    &:checked::before {
      left: 12px;
    }
  }
` 
