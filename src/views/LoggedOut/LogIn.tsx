import React, {useState, useContext, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Button, Box, Grid, InputAdornment, IconButton, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UserContext } from 'contexts';
import { routes } from 'config';
import { Login } from 'clients/user/userClient.types';


export const LogIn = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();


  const { control, handleSubmit, formState: { errors } } = useForm<Login>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(async(data: Login) => {
    await login(data);
  },[login])


  return (
    <Grid
      container
      sx={{
        overflow: 'visible',
        minHeight: 'calc(100vh - 65px)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      direction="column"
    >
      <Box mb={2}>
        <Typography variant="h4">LOGIN</Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <Controller
            name="email"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({field }) => (
              <TextField
                {...field}
                name="email"
                fullWidth
                label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}

              />
            )}
          />
          </Grid>
          <Grid item xs={12}>
            <Controller
            name="password"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({field }) => (
              <TextField
                {...field}
                name="password"
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={() => navigate(routes.signup)}>
              SIGN UP
            </Button>
            <Button
              type="submit"
              variant="outlined"
            >
              Submit
            </Button>
          </Grid>
        </Grid>

      </form>
    </Grid>
  );
};