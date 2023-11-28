import React from 'react';
import Notes from './Notes';

export const Home = (props) => {
  const { showAlert } = props;

  return (
    <div>
      <h2>Welcome to Daybook</h2>
      <p>Your personal space for capturing thoughts, ideas, and tasks.</p>
      <Notes showAlert={showAlert} />
    </div>
  );
}

export default Home;
