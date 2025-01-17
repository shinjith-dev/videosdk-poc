import React from 'react'
import { Platform } from 'react-native'
import VideoSdk from './MeetingProvider'
import VideoSdkWeb from './MeetingProvider.web'

type Props = {}

const MeetSceeen = (props: Props) => {
  if (Platform.OS === 'web')
    return <VideoSdkWeb />

  return <VideoSdk />
}

export default MeetSceeen
