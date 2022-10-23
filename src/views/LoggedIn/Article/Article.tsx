import React, { Fragment, useContext } from 'react';
import { useParams } from 'react-router';
import { format, parseISO } from 'date-fns';
import { Button, Box, Grid, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { UserContext} from 'contexts';
import { useArticle } from 'shared/hooks/article/useArticle';


export const Article = () => {

  const { articleId = '' } = useParams();
  const { isAdmin } = useContext(UserContext)
  const { article, status } = useArticle({
    id: parseInt(articleId, 10),
  });

  return (
    <Fragment>
      {status === 'loading' && (
        <Grid>
          Loading...
        </Grid>
      )}
      {status === 'success' && (
        <Grid container maxWidth="xl">
          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Typography>{article.title}</Typography>
            {isAdmin && (
              <Button size="small" onClick={() => console.log('edit an article')} endIcon={<Edit/>}>
                Edit
              </Button>
            )}
          </Grid>
          <Box>
            <Typography>{format(parseISO(article.createdOn), 'dd.MM.yyyy')}</Typography>
          </Box>
          <Grid item xs={12}>
            {article.content}
          </Grid>
        </Grid>
      )}
      </Fragment>
    );
};