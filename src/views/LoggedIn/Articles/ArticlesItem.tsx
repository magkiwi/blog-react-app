import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, Grid, CardActionArea } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { Article } from 'clients/article/articleClient.types';
import { routes } from 'config';


export const ArticleItem: React.FC<Article> = ({...article}) => {

  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={3} mt={2}>
      <Card>
        <CardActionArea onClick={() => navigate(routes.article(article.id))}>
          <CardHeader
            title={article.title}
            subheader={format(parseISO(article.createdOn), 'dd.MM.yyyy')}
          />
          <CardContent sx={{ overflow: 'hidden' }}>
            {article.content}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};