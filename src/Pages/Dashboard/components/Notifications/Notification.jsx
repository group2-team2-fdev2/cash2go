import './notification.css'

export default function Notification  ( props ) {

      return (
        <div className="notification">
            <div className='date'>{new Date().toLocaleString() }</div>
            <div>{props.title}</div> 
          <div>{props.message}</div>
        </div>
      );
    }