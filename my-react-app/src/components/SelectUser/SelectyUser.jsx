
const SelectUser = ({changedUser}) => {
	const changeUser = (e) => {
		changeUser(e.target.value);
		changedUser(e.target.value);

	};
	return (
		<select name="user" id="user" onChange={changeUser}>
			<option value="1">Денис</option>
			<option value="2">Администратор</option>
		</select>
	);
};

export default SelectUser;