import { Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputFields from './InputFields';
import Button from '@mui/material/Button';
import { credentials } from './utils/Credentials';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const { value, id } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const { username, password } = userData;
    if (username === credentials.username && password === credentials.password) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/');
    } else {
      alert('Incorrect data');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper component="form" onSubmit={submitHandle} sx={{ p: 2 }}>
          <Typography variant="h5" align="center" mb={2}>
            Todo's Form
          </Typography>
          <InputFields
            placeholder="Enter Username"
            id="username"
            type="text"
            onChange={onChangeHandle}
            required
          />
          <InputFields
            placeholder="Enter password"
            id="password"
            type="password"
            onChange={onChangeHandle}
            required
          />
          <Button variant="contained" color="success" type="submit" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
