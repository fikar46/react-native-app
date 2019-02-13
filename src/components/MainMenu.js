import { DrawerNavigator } from 'react-navigation';
import ScreenChat from './ScreenChat';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import Profile from './Profile';
import EmployeeList from './EmployeeList'

export default DrawerNavigator(
    {
        Chat: {
            screen: ScreenChat
        },
        EmployeeList: {
            screen: EmployeeList
        },
        AddNewEmployee: {
            screen: EmployeeCreate
        },
        EditEmployee: {
            screen: EmployeeEdit
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Chat',
        headerMode: 'none'
    }
);