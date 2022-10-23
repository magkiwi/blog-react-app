import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { routes } from 'config';
import { Nav } from 'shared/components/layout/Nav';
import { PermissionView } from 'shared/components/Permission/Permission';
import { Authenticated, NotAuthenticated } from 'shared/components/authentication/authentication';
import { LogIn } from './LoggedOut/LogIn';
import { ArticlesList } from "./LoggedIn/Articles/ArticlesList";
import { Article } from './LoggedIn/Article/Article';
import { SignUp } from './LoggedOut/SignUp';

export const Root = () => {


  return (
    <Fragment>
      <Grid sx={{ overflow: 'hidden' }}>
        <Nav/>
        <NotAuthenticated>
          <Routes>
            <Route path={routes.login} element={<LogIn/>}/>
            <Route path={routes.signup} element={<SignUp/>}/>
            <Route path="*" element={<Navigate to={routes.login}/>} />
          </Routes>
        </NotAuthenticated>
        <Authenticated>
            <Routes>
              <Route path={routes.articles} element={<PermissionView permission='view_article'> <ArticlesList/> </PermissionView>}/>
              <Route path={routes.article()} element={<PermissionView permission='view_article'><Article/></PermissionView>}/>
              <Route path="*" element={<Navigate to={routes.articles}/>} />
            </Routes>
          </Authenticated>
      </Grid>
    </Fragment>
  )
}
