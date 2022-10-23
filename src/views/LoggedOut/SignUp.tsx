import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Button, Box, Grid, InputAdornment, IconButton, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { routes } from 'config';
import { SignUp as SignUpType } from 'clients/user/userClient.types';


export const SignUp = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState<boolean>(false);
  const navigate = useNavigate();


  const { control, handleSubmit, formState: { errors } } = useForm<SignUpType>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatedPassword: '',
    },
  });

  const onSubmit = useCallback(async(data: SignUpType) => {
    console.log('here should be handling sign up');
  },[])


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
        <Typography variant="h4">SINUP</Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={6}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({field }) => (
                <TextField
                  {...field}
                  name="firstName"
                  fullWidth
                  label="First Name"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}

                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({field }) => (
                <TextField
                  {...field}
                  name="lastName"
                  fullWidth
                  label="Last Name"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}

                />
              )}
            />
          </Grid>
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
          <Grid item xs={12}>
            <Controller
              name="repeatedPassword"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({field }) => (
                <TextField
                  {...field}
                  name="repeatedPassword"
                  fullWidth
                  label="repeatedPassword"
                  type={showRepeatedPassword ? "text" : "password"}
                  error={!!errors.repeatedPassword}
                  helperText={errors.repeatedPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowRepeatedPassword(!showRepeatedPassword)}
                        >
                          {showRepeatedPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={() => navigate(routes.login)}>
              LOG IN
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