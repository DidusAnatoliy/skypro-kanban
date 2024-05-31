import * as S from './Calendar.style'

function Calendar() {
  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
          <S.CalendarNavActions>
            <S.CalendarNavActions data-action="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width={6} height={11} viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z"/>
              </svg>
            </S.CalendarNavActions>
            <S.CalendarNavActions data-action="next">
              <svg xmlns="http://www.w3.org/2000/svg" width={6} height={11} viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z"/>
              </svg>
            </S.CalendarNavActions>
          </S.CalendarNavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.CalendarDaysNames>
            <S.CalendarDayName>пн</S.CalendarDayName>
            <S.CalendarDayName>вт</S.CalendarDayName>
            <S.CalendarDayName>ср</S.CalendarDayName>
            <S.CalendarDayName>чт</S.CalendarDayName>
            <S.CalendarDayName>пт</S.CalendarDayName>
            <S.CalendarDayName>сб</S.CalendarDayName>
            <S.CalendarDayName>вс</S.CalendarDayName>
          </S.CalendarDaysNames>
          <S.CalendarSells>
            <S.CalendarOtherMonth>28</S.CalendarOtherMonth>
            <S.CalendarOtherMonth>29</S.CalendarOtherMonth>
            <S.CalendarOtherMonth>30</S.CalendarOtherMonth>
            <S.CalendarCellDay>31</S.CalendarCellDay>
            <S.CalendarCellDay>1</S.CalendarCellDay>
            <S.CalendarCellDay>2</S.CalendarCellDay>
            <S.CalendarCellDay>3</S.CalendarCellDay>
            <S.CalendarCellDay>4</S.CalendarCellDay>
            <S.CalendarCellDay>5</S.CalendarCellDay>
            <S.CalendarCellDay>6</S.CalendarCellDay>
            <S.CalendarCellDay>7</S.CalendarCellDay>
            <S.CalendarCurrent>8</S.CalendarCurrent>
            <S.CalendarActiveDay>9</S.CalendarActiveDay>
            <S.CalendarCellDay>10</S.CalendarCellDay>
            <S.CalendarCellDay>11</S.CalendarCellDay>
            <S.CalendarCellDay>12</S.CalendarCellDay>
            <S.CalendarCellDay>13</S.CalendarCellDay>
            <S.CalendarCellDay>14</S.CalendarCellDay>
            <S.CalendarCellDay>15</S.CalendarCellDay>
            <S.CalendarCellDay>16</S.CalendarCellDay>
            <S.CalendarCellDay>17</S.CalendarCellDay>
            <S.CalendarCellDay>18</S.CalendarCellDay>
            <S.CalendarCellDay>19</S.CalendarCellDay>
            <S.CalendarCellDay>20</S.CalendarCellDay>
            <S.CalendarCellDay>21</S.CalendarCellDay>
            <S.CalendarCellDay>22</S.CalendarCellDay>
            <S.CalendarCellDay>23</S.CalendarCellDay>
            <S.CalendarCellDay>24</S.CalendarCellDay>
            <S.CalendarCellDay>25</S.CalendarCellDay>
            <S.CalendarCellDay>26</S.CalendarCellDay>
            <S.CalendarCellDay>27</S.CalendarCellDay>
            <S.CalendarCellDay>28</S.CalendarCellDay>
            <S.CalendarCellDay>29</S.CalendarCellDay>
            <S.CalendarCellDay>30</S.CalendarCellDay>
            <S.CalendarOtherMonth>1</S.CalendarOtherMonth>
          </S.CalendarSells>
        </S.CalendarContent>
        <input type="hidden" id="datepick_value" defaultValue="08.09.2023"/>
        <S.CalendarPeriod>
          <S.CalendarPSpan>
            Выберите срок исполнения <span className="date-control"/>.
          </S.CalendarPSpan>
          {/*<p className="calendar__p date-end">*/}
          {/*  Срок исполнения:{" "}*/}
          {/*  <span className="date-control">09.09.23</span>*/}
          {/*</p>*/}
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </div>
  )
}

export default Calendar
