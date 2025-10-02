import InfoProvider from './context/info-context'
import ModalProvider from './context/modal-context'
import Home from './home'
import DataContext from './context/data-context'

export default function App() {
  return (
    <div className="font-sans h-full w-full">
      <ModalProvider>
        <InfoProvider>
          <DataContext>
            <Home />
          </DataContext>
        </InfoProvider>
      </ModalProvider>
    </div>
  )
}
