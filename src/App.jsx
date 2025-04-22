import SideBar from "./components/SideBar";

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
//
//  Since I am bad at UI design, these might help:
//  1. https://digitalsynopsis.com/design/website-color-schemes-palettes-combinations/
//  2. https://dribbble.com/shots/25569540-Blog-Articles-List-Concept-Design
//  3. https://dribbble.com/shots/6014997-Mobile-Blog-Design
//  4. https://dribbble.com/tags/mobile-blog
//
// Since I am NOOB at testing, these links may help:
// 1. https://www.robinwieruch.de/react-testing-library/
// 2. https://testing-library.com/docs/
// 3. https://vitest.dev/guide/
// 4. https://github.com/testing-library/jest-dom
// 5. https://testing-library.com/docs/user-event/intro
// 6. https://vitest.dev/api/expect.html

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
  return (
    <>
      <SideBar />
    </>
  )
};

export default App;
