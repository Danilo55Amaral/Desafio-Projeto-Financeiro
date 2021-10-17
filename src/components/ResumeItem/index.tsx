import * as Components from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <Components.Container>
            <Components.Title>{title}</Components.Title>
            <Components.Info color={color}>R$ {value}</Components.Info>
        </Components.Container>
    );
}