import React from 'react';
import { string, number, bool } from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
// omg!1!!!1!!
import avatar1 from 'decor/avatars/ava-1.png'; // eslint-disable-line
import avatar2 from 'decor/avatars/ava-2.png'; // eslint-disable-line
import avatar3 from 'decor/avatars/ava-3.png'; // eslint-disable-line
import avatar4 from 'decor/avatars/ava-4.png'; // eslint-disable-line
import avatar5 from 'decor/avatars/ava-5.png'; // eslint-disable-line
import styles from './Message.sass';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

// Single message

const Message = ({
  userId,
  author,
  authorId,
  authorAvatar,
  text,
  date,
  in: inProp,
}) => {
  const isCurrentUser = userId === authorId;
  const authorClassName = cx(styles.author, {
    [styles.author_current]: isCurrentUser,
  });

  return (
    <CSSTransition in={inProp} timeout={500} classNames="fadeToTop">
      <div className={styles.message}>
        <div className={styles.avatar}>
          <img src={avatars[authorAvatar - 1]} alt="User avatar" />
        </div>
        <div className={styles.content}>
          <p className={authorClassName}>{author}</p>
          <span className={styles.date}>{date}</span>
          <p className={styles.text}>{text}</p>
          {isCurrentUser && <button className={styles.deleteBtn} />}
        </div>
      </div>
    </CSSTransition>
  );
};

Message.propTypes = {
  userId: string.isRequired,
  author: string.isRequired,
  authorId: string.isRequired,
  authorAvatar: number.isRequired,
  text: string.isRequired,
  date: string.isRequired,
  in: bool.isRequired,
};

Message.defaultProps = {
  in: false,
};

export default Message;
