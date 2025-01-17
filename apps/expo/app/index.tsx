import { MeetingProvider } from '@videosdk.live/react-native-sdk'
import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import MeetingView from 'app/features/videosdk/MeetingView'

export default function Screen() {
  return (
    <MeetingProvider
      config={{
        meetingId: "xpd0-zzy0-qo63",
        micEnabled: true,
        webcamEnabled: true,
        name: "Shinjith's Org",
      }}
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2NWEwYWY0Mi0yYjRhLTQ1OGUtYWQ0Mi1jMTExOWEzMDBlZmUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNzAyOTE2MCwiZXhwIjoxNzM3MTE1NTYwfQ.ZyQa7vk2jHTjY-jRE2sx4HUmwnmsDKZqO6Dw1cmQnRs"
    >
      <MeetingView />
    </MeetingProvider>
  )
}
