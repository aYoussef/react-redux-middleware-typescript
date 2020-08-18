import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from './actions/users';
import './styles.css';
import { State } from './types/state';
import { User } from './types/user';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: State) => state.users);
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <div className="App">
      {users.data &&
        users.data.length > 0 &&
        users.data.map((user: User) => {
          return <div key={user.id}>{user.employee_name}</div>;
        })}
    </div>
  );
};

export default App;
