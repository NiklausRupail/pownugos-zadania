const LogoPage = () => {
  const css = `
    div#logo {
        background-color: black;
        color: white;
        font: 50px arial;
        text-align: center;
        text-shadow: silver 4px 4px 8px;
        border: double silver;
        letter-spacing: 15px;
        width: 50%;
        padding: 2px 3px;
    }
    main {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    `;
  return (
    <>
      <style>{css}</style>
      <main>
        <div id='logo'>Mikołaj</div>
      </main>
    </>
  );
};

export default LogoPage;
