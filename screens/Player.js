import React, { useState } from 'react';
import styled from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';

import { ChevronIcon } from '../components/icons/Chevron/index';
import { MoreVertIcon } from '../components/icons/MoreVert/index';
import { PlayIcon } from '../components/icons/Play/index';

const Background = ({ children }) => {
    return (
        <LinearGradient
            colors={['#464769', '#1B1A1F']}
            style={{
                flex: 1,
                paddingTop: 50
            }}>
            {children}
        </LinearGradient>
    );
}

const TopBar = styled.View`
    flex-direction: row;
    justify-content: center;
`;

TopBar.Left = styled.View`
    flex: 1;
    padding-left: 16px;
`;
TopBar.Middle = styled.View`
    flex: 2;
    align-items: center;
`;
TopBar.Right = styled.View`
    flex: 1;
    padding-right: 16px;
    align-items: flex-end;
`;

TopBar.Title = styled.Text`
    color: white;
    text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
    color: white;
    font-weight: bold;
`;

const ScreenArea = styled.View`
    flex: 1;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
`;

const CoverArea = styled.View`
    flex: 4;
`;

CoverArea.Image = styled.Image`
    width: 100%;
    flex: 1;
`;

const PlayerArea = styled.View`
    flex: 2;
    justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
    color: white;
    font-size: 20px;
`;
PlayerArea.Author = styled.Text`
    color: #BBBBBB;
    font-size: 16px;
`;

const Controls = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity``;

Controls.Slider = styled.View`
    flex-basis: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;
Controls.Slider.CurrentTime = styled.Text`
    color: #BBBBBB;
`;
Controls.Slider.TotalTime = styled.Text`
    color: #BBBBBB;
`;

const AudioSlider = styled(Slider)`
    flex-basis: 100%;
    margin-top: 10px;
`;

export default function PlayerScreen() {
    const [segundos, setSegundos] = useState(0)

    return (
        <Background>
            <TopBar>
                <TopBar.Left>
                    <ChevronIcon />
                </TopBar.Left>
                <TopBar.Middle>
                    <TopBar.Title>Tocando Poscast</TopBar.Title>
                    <TopBar.SubTitle>Hipsters Ponto Tech</TopBar.SubTitle>
                </TopBar.Middle>
                <TopBar.Right>
                    <MoreVertIcon />
                </TopBar.Right>
            </TopBar>

            <ScreenArea>
                <CoverArea>
                    <CoverArea.Image
                        resizeMode="contain"
                        source={{
                            uri: "https://picsum.photos/200",
                        }}
                    />
                </CoverArea>

                <PlayerArea>
                    <PlayerArea.Title>
                        Angular vs React - Hipster #142
                    </PlayerArea.Title>
                    <PlayerArea.Author>
                        Hipsters Ponto Tech
                    </PlayerArea.Author>

                    <Controls>
                        <Controls.Slider>
                            <AudioSlider
                                thumbTintColor='#FFFFFF'
                                minimumTrackTintColor='#1DD65F'
                                maximumTrackTintColor='#777777'
                                minimumValue={0}
                                maximumValue={100}
                                value={segundos}
                                onValueChange={(value) => {
                                    setSegundos(value);
                                }}
                            />
                            <Controls.Slider.CurrentTime>
                                {segundos}
                            </Controls.Slider.CurrentTime>
                            <Controls.Slider.TotalTime>
                                52:07
                            </Controls.Slider.TotalTime>
                        </Controls.Slider>

                        <Controls.Play>
                            <PlayIcon
                                width={88}
                                height={88}
                            />
                        </Controls.Play>
                    </Controls>
                </PlayerArea>
            </ScreenArea>
        </Background>
    );
}
