import { format } from 'date-fns'; 
import { ru } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { StyledDayPicker } from './Calendar.style';

export default function Calendar({selected, setSelected}) {
  let footer = <p>Выберите срок исполнения</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, "dd.MM.yy", {locale: ru})}.</p>;
  }
  return (
    <StyledDayPicker
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
