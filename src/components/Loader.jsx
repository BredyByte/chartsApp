const Loader = () => {
  return (
    <p
      style={
        {
          fontSize: "32px",
          textAlign: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "4px",
          backgroundColor: "#1976d2",
          padding: "6px 10px",
          color: "white"
        }
      }
    >Loading...</p>
  )
}

export default Loader;
