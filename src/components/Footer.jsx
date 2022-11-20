import { BottomNavigation } from '@mui/material';

const Footer = () => {
  return (
    <BottomNavigation sx={{ background: "#1976d2", position: "absolute", bottom: "0", width: "100%" }}>
      <p style={{ color: "white" }}>
        Created by David Bredykhin
      </p>
    </BottomNavigation>
  )
}

export default Footer
