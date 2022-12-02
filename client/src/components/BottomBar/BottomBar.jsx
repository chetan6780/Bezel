import React, { useCallback } from 'react';
import styled from 'styled-components';

// prevents component from re-rendering unless its props have changed
const BottomBar = ({
  clickChat,
  clickCameraDevice,
  goToBack,
  toggleCameraAudio,
  userVideoAudio,
  clickScreenSharing,
  screenShare,
  videoDevices,
  showVideoDevices,
  setShowVideoDevices
}) => {
  const handleToggle = useCallback(
    (e) => {
      setShowVideoDevices((state) => !state);
    }, [setShowVideoDevices]
  );

  return (
    <Bar>
      {/* Left buttons */}
      <Left>
        {/* Camera button component */}
        <CameraAudioButton onClick={toggleCameraAudio} data-switch='video'>
          <div>
            {userVideoAudio.video ? (
              <FaIcon className='fas fa-video'></FaIcon>
            ) : (
              <FaIcon className='fas fa-video-slash'></FaIcon>
            )}
          </div>
          Camera
        </CameraAudioButton>

        {/*    
        {showVideoDevices && (
          <SwitchList>
            {videoDevices.length > 0 &&
              videoDevices.map((device) => {
                return <div key={device.deviceId} onClick={clickCameraDevice} data-value={device.deviceId} >{device.label}</div>;
              })}
            <div>Switch Camera</div>
          </SwitchList>
        )}
        <SwitchMenu onClick={handleToggle}>
          <i className='fas fa-angle-up'></i>
        </SwitchMenu> 
        */}

        {/* Audio button component */}
        <CameraAudioButton onClick={toggleCameraAudio} data-switch='audio'>
          <div>
            {userVideoAudio.audio ? (
              <FaIcon className='fas fa-microphone'></FaIcon>
            ) : (
              <FaIcon className='fas fa-microphone-slash'></FaIcon>
            )}
          </div>
          Audio
        </CameraAudioButton>
      </Left>

      {/* Center buttons */}
      <Center>
        {/* Chat button components */}
        <ChatButton onClick={clickChat}>
          <div>
            <FaIcon className='fas fa-comments'></FaIcon>
          </div>
          Chat
        </ChatButton>

        {/* share screen button component */}
        <ScreenButton onClick={clickScreenSharing}>
          <div>
            <FaIcon
              className={`fas fa-desktop ${screenShare ? 'sharing' : ''}`}
            ></FaIcon>
          </div>
          Share Screen
        </ScreenButton>
      </Center>

      {/* Right buttons */}
      <Right>
        <StopButton onClick={goToBack}>Stop</StopButton>
      </Right>
    </Bar>
  );
};

// Styled components

const Bar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 8%;
  padding-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: #393939; {/* #651FFF; */}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Right = styled.div``;

const ChatButton = styled.div`
  width: 75px;
  border: none;
  font-size: 0.9375rem;
  padding: 6px;

  :hover {
    background-color: #9575CD;
    cursor: pointer;
    border-radius: 10px;
  }

  * {
    pointer-events: none;
  }
`;

const ScreenButton = styled.div`
  width: auto;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    background-color: #9575CD;
    cursor: pointer;
    border-radius: 6px;
  }

  .sharing {
    color: #ee2560;
  }
`;

const FaIcon = styled.i`
  width: 30px;
  font-size: calc(16px + 1vmin);
`;

const StopButton = styled.div`
  width: 75px;
  height: 30px;
  border: none;
  font-size: 0.9375rem;
  line-height: 30px;
  margin-right: 15px;
  background-color: #D50000;
  border-radius: 15px;

  :hover {
    background-color: #C62828;
    cursor: pointer;
  }
`;

const CameraAudioButton = styled.div`
  position: relative;
  width: 75px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;

  :hover {
    background-color: #9575CD;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;

export default BottomBar;