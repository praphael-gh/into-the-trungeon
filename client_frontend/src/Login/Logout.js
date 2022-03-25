const Logout = ({logout}) => {


    function handleLogout() {
        fetch("/api/logout", {
          method: "DELETE",
        }).then(() => logout(''));
      }

    return (
            <button onClick={() => handleLogout()}>Logout</button>
        
    )
}

export default Logout;