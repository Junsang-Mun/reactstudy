import React,{useRef, useState} from 'react';

const DiaryEditor = () => {
  const titleRef = useRef();
  const contentRef = useRef();

  const [data, setData] = useState({
    title: '',
    content: '',
    emotion: '3'
  });

  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    if (data.title.length <= 0) {
      //alert('제목이 없습니다.');
      titleRef.current.focus();
      return ;
    }
    if (data.content.length <= 0) {
      // alert('내용이 없습니다.');
      contentRef.current.focus();
      return ;
    }
    alert(`Title: ${data.title}\nContent: ${data.content}\nEmotion: ${data.emotion}`);
  };

  return (
    <div className='diaryEditorWrapper'>
      <h2 className='title'>오늘의 일기</h2>
      <input name='title' ref={titleRef} value={data.title} onChange={(e) => {handleData(e);}} />
      <br />
      <textarea name='content' ref={contentRef} value={data.content} onChange={(e) => {handleData(e);}} />
      <br />
      <div className='emotionWrapper'>
        <p>지금 기분은... </p>
        <select name='emotion' value={data.emotion} onChange={(e) => {handleData(e);}}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <br />
      <button className='saveButton' onClick={handleSave}>저장하기</button>
    </div>
  );
};

export default DiaryEditor;
