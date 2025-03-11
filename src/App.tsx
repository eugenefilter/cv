import { useDataContext } from './DataContext'
import ColumnOne from './components/ColumnOne'
import ColumnTwo from './components/ColumnTwo'
import Header from './components/Header'

function App() {
  const { languageItems } = useDataContext();

  console.log('App render ...');
  if (!languageItems) {
    return <div>Выберите язык для отображения информации.</div>;
  }

  return (
    <>
      <Header />

      <div className='font-robot grid grid-cols-1 md:grid-cols-3 gap-0'>
        <div className='order-2 md:order-1 h-full col-span-1 bg-black-900 text-white p-8'>
          <ColumnOne />
        </div>
        <div className='order-1 md:order-2 col-span-2 bg-white text-black-900'>
          <ColumnTwo />
        </div>
      </div>
    </>
  )
}

export default App
