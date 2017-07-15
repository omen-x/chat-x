import React from 'react';

import styles from './NewMessage.sass';


const NewMessage = () => (
  <div className={styles.newMessage}>
    <form>
      <input type="text" />
      <input type="submit" value="" />
    </form>
  </div>
);


export default NewMessage;
