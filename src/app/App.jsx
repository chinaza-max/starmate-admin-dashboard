import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './components';
import { AuthProvider } from './contexts/JWTAuthContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { SettlementProvider } from './contexts/SettlementContext';
import routes from './routes';
import '../fake-db';

const App = () => {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <SettlementProvider>
          <MatxTheme>
            <CssBaseline />
            {content}
          </MatxTheme>
        </SettlementProvider>
      </AuthProvider>
    </SettingsProvider>
  );
};

export default App;
