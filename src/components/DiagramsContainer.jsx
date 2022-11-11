import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box } from '@mui/material';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { userTypes, bitcoinTypes } from '../redux/types';
import Loader from './Loader';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DiagramsContainer({ data }) {
  const dispatch = useDispatch();

  const onClickUsersLose = () => {
    dispatch({
      type: userTypes.GET_USER,
      payload: {
        api: "./userData.json",
        label: "Users Lost",
        dataMap: "userLost"
      }
    })
  }

  const onClickUsersGain = () => {
    dispatch({
      type: userTypes.GET_USER,
      payload: {
        api: "./userData.json",
        label: "Users Gain",
      }
    })
  }

  const onClickBitcoin = (time) => {
    dispatch({
      type: bitcoinTypes.GET_BITCOIN,
      payload: {
        api:`https://financialmodelingprep.com/api/v3/historical-chart/${time}min/AAPL?apikey=eac2a5a15a21abfd4e60020fb2224475&limit=120`
      }
    })
  }

  if(data.bitcoin.loading || data.bitcoin.loading) {
    return <Loader/>
  } else return (
    <Box sx={{
      width: "100%",
      p: "12px",
      height: "100%",
      display: "flex",
      alignItems: "center"
    }} className="hello">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={6}>
          <Item>
            <Stack
              direction="row"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
              sx={{ justifyContent: "center", marginBottom: "12px" }}
            >
              <Button
                variant="outlined"
                size="medium"
                onClick={() => (onClickBitcoin("1"))}
              >
                1 min
              </Button>
              <Button
                variant="outlined"
                size="medium"
                onClick={() => (onClickBitcoin("5"))}
              >
                5 min
              </Button>
              <Button
                variant="outlined"
                size="medium"
                onClick={() => (onClickBitcoin("15"))}
              >
                15 min
              </Button>
            </Stack>
            <LineChart data={data.bitcoin.data}/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Stack
              direction="row"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
              sx={{ justifyContent: "center", marginBottom: "12px" }}
            >
              <Button
                variant="outlined"
                size="medium"
                onClick={onClickUsersGain}
              >
                Gain
              </Button>
              <Button
                variant="outlined"
                size="medium"
                onClick={onClickUsersLose}
              >
                Lose
              </Button>
            </Stack>
            <BarChart data={data.user.data}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DiagramsContainer;