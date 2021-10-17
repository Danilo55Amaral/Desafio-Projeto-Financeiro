import * as Components from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

        const handlePrevMonth = () => {
            let [year, month] = currentMonth.split('-');
            let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
            currentDate.setMonth( currentDate.getMonth() - 1 );
            onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
        }

        const handleNextMonth = () => {
            let [year, month] = currentMonth.split('-');
            let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
            currentDate.setMonth( currentDate.getMonth() + 1 );
            onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
        }

    return (
        <Components.Container>
            <Components.MonthArea>
                <Components.MonthArrow onClick={handlePrevMonth}>⬅️</Components.MonthArrow>
                <Components.MonthTitle>{formatCurrentMonth(currentMonth)}</Components.MonthTitle>
                <Components.MonthArrow onClick={handleNextMonth}>➡️</Components.MonthArrow>
            </Components.MonthArea>
            <Components.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem 
                    title="Balanço" 
                    value={income - expense} 
                    color={(income-expense) < 0 ? 'red' : 'green'}
                />
            </Components.ResumeArea>
        </Components.Container>
    );
}