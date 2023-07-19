import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
import './App.css'
import QrCodeCard from './components/QrCodeCard'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <QrCodeCard></QrCodeCard>
    </ConfigProvider>
  )
}

export default App
