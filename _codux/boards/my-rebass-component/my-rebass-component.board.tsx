import { createBoard } from '@wixc3/react-board';
import MyRebassComponent from '../../../src/components/my-rebass-component/my-rebass-component';

export default createBoard({
    name: 'MyRebassComponent',
    Board: () => <MyRebassComponent />,
});
