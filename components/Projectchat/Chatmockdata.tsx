import React, {memo, useState} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';

export const ProjectChatData = [
  {
    id: 1,
    name: 'Leticia saavedra ',
    text: 'Happy Friday Team! Remember to share your reports to review before the end of',
    userprofile:
      'https://img.freepik.com/photos-gratuite/belle-jeune-femme-travaillant-son-ordinateur-portable-dans-son-bureau-maison_231208-13967.jpg',
    time: '4min',
    replies: [
      {
        replyname: 'Devin Wong ',
        replytext: 'I`m uploading mine! ',
        replytime: '4min',
        replyuserprofile:
          'https://watermark.lovepik.com/photo/20211123/large/lovepik-outdoor-mobile-office-for-professional-women-picture_500834202.jpg',
      },
      {
        replyname: 'Anne Carry ',
        replytext: 'I`ll send you mine shortly,still working on it! ',
        replytime: '4min',
        replyuserprofile:
          'https://thumbs.dreamstime.com/b/happy-young-indian-businesswoman-using-computer-sit-office-desk-happy-young-indian-business-woman-entrepreneur-using-computer-160752264.jpg',
      },
    ],
  },

  {
    id: 2,
    name: 'Anne Carry ',
    text: 'I`m uploading mine!',
    time: '4min',
    userprofile:
      'https://thumbs.dreamstime.com/b/happy-young-indian-businesswoman-using-computer-sit-office-desk-happy-young-indian-business-woman-entrepreneur-using-computer-160752264.jpg',
  },
  {
    id: 3,
    name: 'Leticia saavedra ',
    text: 'Happy Friday Team! Remember to share your reports to review before the end of',
    userprofile:
      'https://img.freepik.com/photos-gratuite/belle-jeune-femme-travaillant-son-ordinateur-portable-dans-son-bureau-maison_231208-13967.jpg',
    time: '4min',
    replies: [
      {
        replyname: 'Devin Wong ',
        replytext: 'I`m uploading mine! ',
        replytime: '4min',
        replyuserprofile:
          'https://watermark.lovepik.com/photo/20211123/large/lovepik-outdoor-mobile-office-for-professional-women-picture_500834202.jpg',
      },
      {
        replyname: 'Anne Carry ',
        replytext: 'I`ll send you mine shortly,still working on it! ',
        replytime: '4min',
        replyuserprofile:
          'https://thumbs.dreamstime.com/b/happy-young-indian-businesswoman-using-computer-sit-office-desk-happy-young-indian-business-woman-entrepreneur-using-computer-160752264.jpg',
      },
    ],
  },
  {
    id: 4,
    name: 'Leticia saavedra ',
    text: 'Happy Friday Team! Remember to share your reports to review before the end of',
    userprofile:
      'https://img.freepik.com/photos-gratuite/belle-jeune-femme-travaillant-son-ordinateur-portable-dans-son-bureau-maison_231208-13967.jpg',
    time: '4min',
    replies: [
      {
        replyname: 'Devin Wong ',
        replytext: 'I`m uploading mine! ',
        replytime: '4min',
        replyuserprofile:
          'https://watermark.lovepik.com/photo/20211123/large/lovepik-outdoor-mobile-office-for-professional-women-picture_500834202.jpg',
      },
      {
        replyname: 'Anne Carry ',
        replytext: 'I`ll send you mine shortly,still working on it! ',
        replytime: '4min',
        replyuserprofile:
          'https://thumbs.dreamstime.com/b/happy-young-indian-businesswoman-using-computer-sit-office-desk-happy-young-indian-business-woman-entrepreneur-using-computer-160752264.jpg',
      },
    ],
  },
  {
    id: 5,
    name: 'Leticia saavedra ',
    text: 'Happy Friday Team! Remember to share your reports to review before the end of',
    userprofile:
      'https://img.freepik.com/photos-gratuite/belle-jeune-femme-travaillant-son-ordinateur-portable-dans-son-bureau-maison_231208-13967.jpg',
    time: '4min',
    replies: [
      {
        replyname: 'Devin Wong ',
        replytext: 'I`m uploading mine! ',
        replytime: '4min',
        replyuserprofile:
          'https://watermark.lovepik.com/photo/20211123/large/lovepik-outdoor-mobile-office-for-professional-women-picture_500834202.jpg',
      },
      {
        replyname: 'Anne Carry ',
        replytext: 'I`ll send you mine shortly,still working on it! ',
        replytime: '4min',
        replyuserprofile:
          'https://thumbs.dreamstime.com/b/happy-young-indian-businesswoman-using-computer-sit-office-desk-happy-young-indian-business-woman-entrepreneur-using-computer-160752264.jpg',
      },
    ],
  },
  {
    id: 6,
    name: 'Leticia saavedra ',
    text: 'Happy Friday Team! Remember to share your reports to review before the end of',
    userprofile:
      'https://img.freepik.com/photos-gratuite/belle-jeune-femme-travaillant-son-ordinateur-portable-dans-son-bureau-maison_231208-13967.jpg',
    time: '4min',
    replies: [
      {
        replyname: 'Devin Wong ',
        replytext: 'I`m uploading mine! ',
        replytime: '4min',
        replyuserprofile:
          'https://watermark.lovepik.com/photo/20211123/large/lovepik-outdoor-mobile-office-for-professional-women-picture_500834202.jpg',
      },
      {
        replyname: 'Anne Carry ',
        replytext: 'I`ll send you mine shortly,still working on it! ',
        replytime: '4min',
        replyuserprofile:
          'https://thumbs.dreamstime.com/b/happy-young-indian-businesswoman-using-computer-sit-office-desk-happy-young-indian-business-woman-entrepreneur-using-computer-160752264.jpg',
      },
    ],
  },
];

const ProjectChatUserData = ({messages}: any) => {
  const [shownRepliesIds, setShownRepliesIds] = useState<number[]>([]);
  const toggleReplies = (id: number) => {
    if (shownRepliesIds.includes(id)) {
      setShownRepliesIds(shownRepliesIds.filter(shownId => shownId !== id));
    } else {
      setShownRepliesIds([...shownRepliesIds, id]);
    }
  };
  const isRepliesShown = (id: number): boolean => shownRepliesIds.includes(id);

  const ProjectChatmessage = ({data}: any) => {
    const {id, name, text, time, userprofile} = data;
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={{uri: userprofile}}
            style={{width: 35, height: 35, borderRadius: 10, marginRight: 16}}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text>{name}</Text>
            <Text>{time}</Text>
          </View>
          <View>
            <Text style={{maxWidth: '90%'}}>{text}</Text>
          </View>
          <View>
            <View>
              <Text>Reply</Text>
            </View>
            <TouchableOpacity>
              <View>{/* <Replyemoji /> */}</View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={() => toggleReplies(id)}>
                <Text>
                  {isRepliesShown(id) ? 'Hide replies' : 'Show replies'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return messages.map((message: any, index: number) => (
    <View key={index.toString()} style={{flex: 1}}>
      <View>
        <ProjectChatmessage data={message} />
      </View>
      {isRepliesShown(message.id) && (
        <View>
          {message.replies?.map((reply: any, ind: any) => (
            <View style={{flexDirection: 'row'}} key={ind.toString()}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    position: 'relative',
                    bottom: 90,
                    marginBottom: -30,
                  }}>
                  {/* <ChatreplyLine style={{marginLeft: -12}} /> */}
                </View>
                <View>
                  <Image
                    source={{uri: reply.replyuserprofile}}
                    style={{width: 35, height: 35, borderRadius: 10}}
                  />
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text>{reply.replyname}</Text>
                  <Text>{reply.replytime}</Text>
                </View>
                <Text style={{maxWidth: '80%'}}>{reply.replytext}</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <View>{/* <Replyemoji /> */}</View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  ));
};

export default memo(ProjectChatUserData);
