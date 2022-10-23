import { Box, Grid, Paper, Typography } from '@mui/material';
import { useArticles } from 'shared/hooks/article/useArticles';
import { ArticleItem } from "./ArticlesItem";


export const ArticlesList = () => {

  const { status, articles } = useArticles();

  return (
    <Paper>
      {status === 'loading' && (
        <Box>
          <Typography> Loading...</Typography>
        </Box>
      )}
      {status === 'success' && (
          <Grid container spacing={2}>
            {articles?.map(article => (<ArticleItem key={article.id} {...article}/>))}
          </Grid>
      )}
    </Paper>
  );
};