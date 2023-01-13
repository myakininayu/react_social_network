import './App.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn' alt='logo'></img>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div><img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'/></div>
        <div>
          ava+ descr
          <img scr='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' />
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
            <div>
              post 3
            </div>
          </div>
        </div>
        <img scr='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEzK4VXorXxVsozs5SvhFARyfKmG3-8g4aCbzHdaTKrTpTFWPYN_5VE29Ea2DnTmvtcw&usqp=CAU' />
      </div>
    </div>
  );
}

export default App;
