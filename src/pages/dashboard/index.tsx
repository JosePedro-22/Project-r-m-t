import { BarraDeFerramentas } from '../../shared/components/barraDeFerramentas/';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {

  return (
    <LayoutBaseDePagina 
      titulo='Página inicial' 
      barraDeFerramentas={(
        <BarraDeFerramentas
          mostrarInputBusca
          textoDoBotaoNovo='New'
        />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
