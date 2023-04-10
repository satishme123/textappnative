import React, {FC, memo, useState} from 'react';
import Container from '../../atoms/Container';
import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import Accordion from 'react-native-collapsible/Accordion';
import {Button, ScrollView, StyleSheet} from 'react-native';
import ChevronUpSvg from '../../svg/icons/chevron-up.svg';
import ChevronDownSvg from '../../svg/icons/chevron-down.svg';
import projects from './ProjectMockData';
import chatMockData from './chatMockData';
import {Image} from 'react-native';

interface ISection {
  title: string;
  content: JSX.Element;
}

const Dashboard: FC = () => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const sections: ISection[] = [
    {
      title: 'Projects',
      content: (
        // <Text variant="body">
        //   React Native lets you create truly native apps and doesn't compromise
        //   your users' experiences. It provides a core set of platform agnostic
        //   native components
        // </Text>
        <Box>
          {projects.map((item, index) => (
            <Box key={index} flexDirection="row" p="xs">
              <Text variant="body">{item.name}</Text>

              {item.unreadClient !== null && item.unreadClient !== 0 && (
                <Box style={styles.unreadBoxClient}>
                  <Text variant="body" color="white">
                    {item.unreadClient}
                  </Text>
                </Box>
              )}
              {item.unreadInternal !== null && item.unreadInternal !== 0 && (
                <Box style={styles.unreadBoxInternal}>
                  <Text variant="body" color="white">
                    {item.unreadInternal}
                  </Text>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      ),
    },
    {
      title: 'Direct messages',
      content: (
        // <Text variant="body">
        //   See your changes as soon as you save. With the power of JavaScript,
        //   React Native lets you iterate at lightning speed.
        // </Text>
        // name: 'Jacquelynn Leggan',
        // image: 'http://dummyimage.com/24x24.png/ff4444/ffffff',
        // unread: null,
        <Box>
          {chatMockData.map((item, index) => (
            <Box key={index} flexDirection="row" p="xs">
              <Image source={{uri: item.image}} style={styles.imageStyle} />

              <Text variant="body">{item.name}</Text>
              {item.unread !== null && (
                <Box style={styles.unreadMessage}>
                  <Text variant="body" color="white">
                    {item.unread}
                  </Text>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      ),
    },
    {
      title: 'Groups/Channels',
      content: (
        <>
          <Text variant="body">
            React components wrap existing native code and interact with native
            APIs via React's declarative UI paradigm and JavaScript. This
            enables native app development for whole new teams of developers
          </Text>
          <Button title="See more..." />
        </>
      ),
    },
  ];

  const renderHeader = (
    content: ISection,
    _index: number,
    isActive: boolean,
  ) => {
    return (
      <Box
        paddingVertical="md"
        flex={1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text variant="headline4" fontWeight="bold">
          {content.title}
        </Text>
        {isActive ? <ChevronUpSvg /> : <ChevronDownSvg />}
      </Box>
    );
  };

  const renderContent = (content: ISection) => {
    return <Box pb="sm">{content.content}</Box>;
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollviewContainer}>
      <Container p="lg">
        <Accordion
          align="bottom"
          sections={sections}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(indexes: number[]) => setActiveSections(indexes)}
        />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollviewContainer: {
    flex: 1,
  },
  unreadBoxClient: {
    position: 'absolute',
    right: 25,
    top: 5,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadBoxInternal: {
    position: 'absolute',
    right: 0,
    top: 5,
    backgroundColor: 'green',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadMessage: {
    position: 'absolute',
    right: 0,
    top: 5,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 20,
    marginRight: 8,
  },
});

export default memo(Dashboard);
