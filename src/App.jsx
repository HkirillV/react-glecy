import {Provider} from 'react-redux'
import store from '@/store/store'
import '@/styles/main.scss'
import '@/App.scss'

import Header from '@/components/Header/Header';
import '@/styles/main.scss'
import '@/App.scss'

function App() {

    return (
      <Provider store={store}>
        <div className="app-container">
          <Header/>
        </div>
      </Provider>
    )
}

export default App
