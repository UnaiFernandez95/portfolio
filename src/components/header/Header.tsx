import './header.css'; 

const Header = () => {
  return (
    <header>
      <img src="src/assets/profilePhoto.jpg" alt="Profile photo" />
      <main>
        <h1>Unai Fernandez</h1>
        <h2>{"{ Web Apps Developer || Javascript, React, Python }"}</h2>
      </main>
    </header>
  );
}

export default Header;
