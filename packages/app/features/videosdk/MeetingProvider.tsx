import {
  MeetingProvider,
} from "@videosdk.live/react-native-sdk";
import MeetingView from "./MeetingView";

const VideoSdk = () => {
  return (
    <MeetingProvider
      config={{
        meetingId: "xpd0-zzy0-qo63",
        micEnabled: true,
        webcamEnabled: true,
        name: "Shinjith's Org",
      }}
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2NWEwYWY0Mi0yYjRhLTQ1OGUtYWQ0Mi1jMTExOWEzMDBlZmUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNzAzMTgzOSwiZXhwIjoxNzM3MTE4MjM5fQ.i31SlD9usVlfYXAJOdRorlGfw3ox-r4OjKKXFLrrMYU"
    >
      <MeetingView />
    </MeetingProvider>
  )
};
export default VideoSdk;
