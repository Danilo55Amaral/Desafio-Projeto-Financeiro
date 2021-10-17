import * as Components from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <Components.TableLine>
            <Components.TableColumn>{formatDate(item.date)}</Components.TableColumn>
            <Components.TableColumn>
                <Components.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Components.Category>
            </Components.TableColumn>
            <Components.TableColumn>{item.title}</Components.TableColumn>
            <Components.TableColumn>
                <Components.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </Components.Value>
            </Components.TableColumn>
        </Components.TableLine>
    );
}