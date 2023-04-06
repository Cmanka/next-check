import { navigationList } from '../../model/data/navigation-list.data';
import { NavigationItem } from '../navigation-item';
import * as Styled from './list.styles';

const ListComponent = () => {
  return (
    <Styled.Wrapper>
      {navigationList.map((item) => (
        <NavigationItem key={item.href} item={item} />
      ))}
    </Styled.Wrapper>
  );
};

export default ListComponent;
