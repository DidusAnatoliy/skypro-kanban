import styled from "styled-components";
import { topicStyles } from "../../../lib/topic";
import { hover01, hover03 } from "../../Common/Common.styled";

export const PopBrows = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 750px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategotiesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  opacity: 1;
  display: block;
  opacity: 1 !important;
  background-color: ${({ $topic }) =>
        topicStyles[$topic]?.backgroundColor || "#94A6BE"};
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${({ $topic }) => topicStyles[$topic]?.color || "#FFFFFF"};
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const PopBrowseStatusP = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const PopBrowseFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;
export const PopBrowseCalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const PopBrowseBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;

export const BtnGroup = styled.div`
  gap: 20px;
  & button {
    margin-right: 8px;
  }
`;

export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  & a {
    color: #565eef;
  }
  ${hover03}
`;

export const BtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  & a {
    color: #ffffff;
  }
  ${hover01}
`;