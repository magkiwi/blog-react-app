import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Root } from 'views/Root';
import { muiTheme } from "./shared/styles/muiTheme";
import { UserContextProvider } from 'contexts';


const queryClient = new QueryClient()


export const App = () => {

  const theme = muiTheme();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Root/>
            </CssBaseline>
          </ThemeProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </BrowserRouter>

  );
}

export default App;
