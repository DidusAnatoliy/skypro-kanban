import styled from 'styled-components';
import { hover01 } from '../Common/Common.styled';

export const HeaderButton = styled.button`
  /* Базовые стили */
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  /* Применение hover01 */
  ${hover01}
`;