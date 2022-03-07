import { List, Input, Row, Col, Card, Divider } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useRequest, request } from 'umi';
import { Result, Root } from './type';
import ReactAudioPlayer from 'react-audio-player';
const app_id = '232bb462'; // insert your APP Id
const app_key = '3be4b5a8c79e2ca68c89c62b77713569'; // insert your APP Key
// const fields = 'pronunciations';
const strictMatch = 'false';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const Word = () => {
  const [content, SetContent] = useState<Result[]>();
  const { run: getWordDetail } = useRequest<{ data: Root }>(
    async (wordId: string) => {
      const queryUrl =
        '/api/v2/entries/en-gb/' + wordId + '?strictMatch=' + strictMatch;
      console.log('wordId is', wordId, 'queryUrl is ', queryUrl);
      
      if (wordId === undefined) {
        return { data: {} };
      }
      const w = await request<string>("api/v1/query/"+wordId, {
        method: 'GET',
      });
      console.log(w)
      const word = JSON.parse(w)
      console.log(word.id, word.metadata, word.word);
      return {
        data: word,
      };
    },
  );

  return (
    <>
      {' '}
      <Row gutter={24} justify="center">
        <Col xs={20} sm={20} md={12} lg={12} style={{ background: '' }}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={async (word: string) => {
              console.log('dddd', word);
              if (word === undefined) {
                return;
              }
              const d = await getWordDetail(word);
              SetContent(d.results);
            }}
          />
        </Col>
      </Row>
      <br />
      {content?.map((item) => {
        return (
          <Card bordered={true}>
            <h1>{item.id}</h1>
            {item.lexicalEntries?.map((le, index) => {
              return le.entries?.map((en) => {
                const pro = en.pronunciations?.map((pro) => {
                  return (
                    <>
                      {le.lexicalCategory?.text}.{' '}
                      <a href={pro.audioFile}>[{pro.phoneticSpelling}]</a>{' '}
                      {/* <audio src={pro.audioFile} controls={false}/> */}
                      <ReactAudioPlayer src={pro.audioFile} controls style={{width:"100px", height:"10px"}}/>
                      <br />
                    </>
                  );
                });
                const len = en.senses.length
                const sense = en.senses.map((s, index) => {
                  return (
                    <>
                      定义: {s.definitions}
                      <br />
                      例子:
                      <ol>
                        {s.examples?.map((ex) => {
                          return <li>{ex.text}</li>;
                        })}
                      </ol>
                      {index==len?<Divider />:""}
                      
                    </>
                  );
                });
                return (
                  <>
                 {en.etymologies!==undefined? "起源: "+en.etymologies:""}
                    <Divider>词性{index + 1} </Divider>
                    {pro}
                    <br />
                    {sense}
                  </>
                );
              });
            })}
          </Card>
        );
      })}
    </>
  );
};

export default Word;
