import Notification from "./notification";
import './notification.css'

export default function NotificationPage () {

  return (
    <div className="display">
      <h1>Notifications</h1>
      <div className="notification-title">
      <h4>All Notifications</h4>
      <p>Sorted by Date</p>
      </div>
      <Notification title='Security Alert' message="There was a login attempt into your account. Kindly change your login password if that was not you" />
      <Notification title='Application Report' message="The short term loan of Ogbeni Mallam Stitern (003556Z) just got approved with a 70% prediction metric" />
      <Notification title='Application Download' message="You just downloaded the application of Ogbeni Mallam Stitern (003556Z)" />
      <Notification title='Application Report' message="The short term loan of Ogbeni Mallam Stitern (003557Z) just got rejected with a 50% prediction metric" />
      <Notification title='System Updates' message="A new web app version 5.0 will be launched by 30th of May" />
      <Notification title='New Resources' message="A new tutorial has been published in the resources channel" />
    </div>
  );
}
