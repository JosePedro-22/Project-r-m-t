import React from 'react';
import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;

  textoDoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  
  textoDoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
  
}) => {
  const theme = useTheme();
  return(
    <>
      <Box 
        height={theme.spacing(5)} 
        marginX={1}
        padding={1}
        paddingX={2}
        display="flex" 
        gap={1} 
        alignItems="center" 
        component={Paper}>
        {mostrarInputBusca && (
          <TextField
            size="small"
            placeholder="Pesquisar..."
            value={textoDaBusca}
            onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          />
        )}
        
        <Box flex={1} display="flex" justifyContent="end">
          {mostrarBotaoNovo && (
            <Button
              color="primary"
              disableElevation
              variant='contained'
              endIcon={<Icon>add</Icon>}
            >{textoDoBotaoNovo}</Button>
          )}
        </Box>
        
      </Box>
    </>
  );
};