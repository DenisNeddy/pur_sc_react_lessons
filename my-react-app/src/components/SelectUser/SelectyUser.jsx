
import {useContext } from 'react';
import { UserContext } from '../../contenxt/user.context';

const SelectUser = ({changedUser}) => {
	const { userId } = useContext(UserContext);
	const changeUser = (e) => {
		changeUser(e.target.value);
		changedUser(e.target.value);

	};
	return (
		<select name="user" id="user" value={userId} onChange={changeUser}>
			<option value="1">Денис</option>
			<option value="2">Администратор</option>
		</select>
	);
};

export default SelectUser;