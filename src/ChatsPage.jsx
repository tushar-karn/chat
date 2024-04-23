import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return (
      <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='efa1ab02-3572-4692-b03b-a0bf9be2caec'
        username= {props.user.username}
        secret= {props.user.secret}
        style={{height: '100%'}}
        />
      </div>
    )
  };
  export default ChatsPage;