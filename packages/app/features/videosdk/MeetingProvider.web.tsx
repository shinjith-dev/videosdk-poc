import {
  MeetingProvider,
} from "@videosdk.live/react-sdk";
import MeetingView from "./MeetingView.web";

const VideoSdk = () => {
  return (
    <MeetingProvider
      config={{
        debugMode: true,
        meetingId: "xpd0-zzy0-qo63",
        micEnabled: true,
        webcamEnabled: true,
        name: "Shinjith's Org",
      }}
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2NWEwYWY0Mi0yYjRhLTQ1OGUtYWQ0Mi1jMTExOWEzMDBlZmUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNzAyOTY5NiwiZXhwIjoxNzM3MTE2MDk2fQ.j8wcTAPJ6he8rAKooZlaXl_VJitsrQUztAxB7JNy2Cg"
    >
      <MeetingView />
    </MeetingProvider>
  )
};
export default VideoSdk;
