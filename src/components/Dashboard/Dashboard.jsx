// import { logout } from '../../firebase'
import { QRCodeSVG } from 'qrcode.react'
import './Dashboard.css'

function Dashboard () {
  return (
    <div className='dashboard'>
      {/* <button onClick={() => logout()}>Sign Out</button> */}
      <div className="hackgroup">
        <button className='hack'>HACK</button>
        <QRCodeSVG value='https://reactjs.org/' />,
      </div>
    </div>
  )
}
export default Dashboard
