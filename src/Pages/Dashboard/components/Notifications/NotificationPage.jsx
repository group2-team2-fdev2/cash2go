
import { Notifications } from './NotificationObj';
import OptionsIcon from './OptionsIcon';
import './notification.css'

export default function NotificationPage () {

  return (
    <div className="display">
      <div className="notification-title">
      <h4>All Notifications</h4>
      <p>Sorted by Date</p>
      </div>
      <div>
      {Notifications.map((Notifications) => {
            return (
      <div className="notification" key={Notifications.id}>
        <div>
            <div className='date'>{new Date().toLocaleString() }</div>
            <div className='title'>{Notifications.title}</div> 
          <div className='message'>{Notifications.message}</div>
          </div>
          <div className='icon'>
          <span>{<OptionsIcon/>}</span>
          </div>
        </div> )
          })} 
        </div>
    </div>
  );
}
