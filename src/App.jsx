import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Blog App (ReactJS/Express) (Basic App)
// - User management stuff
// - Users can post blogs.
// - Users can comment on posts.
// - Users can heart posts.
// - Users can save posts.
// - Posts
//  - Date created, heart count, save count,
//    comment count.
//  - comments will have date created. It displays
//    the user who created it, and the message left
//    by the user.
//  - comment likes dislikes
//  - Posts can be published and unpublished
// - View profile
//  - user post lists
//  - user save lists
//  - user heart lists
// - Real-time notifications
//  - comment like, post heart notifications

// TODO:
// Front end:
// [ ] Design the main page:
//  - [ ] sidebar that has
//    - All posts
//    - See notifications
//    - See profile
//    - sign out
//  - [ ] main display that displays whatever the
//     sidebar has selected

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      HELLO
    </>
  )
};

export default App;
