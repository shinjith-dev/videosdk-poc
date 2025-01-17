import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMeeting } from "@videosdk.live/react-native-sdk";
import ParticipantView from "./ParticipantView";

export default function MeetingView() {
    const [joined, setJoined] = useState<string | null>(null);
    //Get the method which will be used to join the meeting.
    //We will also get the participants list to display all participants
    const { join, participants, changeWebcam } = useMeeting({
      //callback for when meeting is joined successfully
      onMeetingJoined: () => {
        setJoined("JOINED");
      },
    });

    const joinMeeting = () => {
      setJoined("JOINING");
      join();
      setTimeout(() => {
        changeWebcam();
      }, 300);
    };

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {joined && joined == "JOINED" ? (
          <>
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                participantId={participantId}
                key={participantId}
              />
            ))}
          </>
        ) : joined && joined == "JOINING" ? (
          <Text>Joining the meeting...</Text>
        ) : (
          <TouchableOpacity
            onPress={joinMeeting}
            style={{ backgroundColor: "black", alignSelf: "center", padding: 12 }}
          >
            <Text style={{ color: "#fff" }}>Join the meeting</Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    );
  }
