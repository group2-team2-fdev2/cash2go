import { CourierProvider } from "@trycourier/react-provider";
import { Toast } from "@trycourier/react-toast";
import { Inbox } from "@trycourier/react-inbox";

const userId = Math.round(Math.random() * 10e16).toString(36);
const CLIENT_KEY = 'MWJiZjcyZmMtMDJlNy00ZTVhLTgxZjUtNWJhOGYwNjRiZmU1'

export default function MyApp ( children ) {
console.log(userId); // logs the userId, you'll need this id when setting up the test event 
  return (
    <CourierProvider clientKey={CLIENT_KEY} userId={userId}>
      <Toast />
      <Inbox />
      {children}
    </CourierProvider>
  );
}

