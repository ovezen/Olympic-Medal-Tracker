import React, { useState } from 'react';
import MedalForm from './MedalForm';
import MedalList from './MedalList';

function App() {
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // 추가된 데이터를 저장하는 데이터 리스트 state 추가하기
  const [medalList, setMedalList] = useState([]);

  // 제출 이벤트 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();

    // (선택 구현사항) 중복 국가 처리하기
    const duplicateEntry = medalList.find((entry) => entry.country === country);
    if (duplicateEntry) {
      alert('이미 존재하는 국가입니다.');
      return;
    }

    // 입력한 데이터를 객체로 생성하기
    const newEntry = { country, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) };

    setMedalList([...medalList, newEntry].sort((a, b) => b.gold - a.gold));

    // 입력 필드 초기화
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);

    // 콘솔에서 출력해보기(테스트용)
    // console.log(`Country: ${country}, Gold: ${gold}, Silver: ${silver}, Bronze: ${bronze}`)
  };

  // 데이터 삭제 핸들러
  const handleDelete = (index) => {
    const updatedList = [...medalList];
    updatedList.splice(index, 1);

    setMedalList(updatedList.sort((a, b) => b.gold - a.gold));
  };

  // 데이터 업데이트 핸들러
  const handleUpdate = () => {

    // (선택 구현사항) 존재하지 않는 국가 알림
    const existingCoutry = medalList.find((entry) => entry.country === country);
    if (!existingCoutry) {
      alert('존재하지 않는 국가입니다.')
      return;
    }

    const updatedList = medalList.map((entry) => {
      if (entry.country === country) {
        return { ...entry, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) };
      }
      return entry;
    })

    setMedalList(updatedList.sort((a, b) => b.gold - a.gold));

    // 입력 필드 초기화
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <div className="app-container">
      <div className="app-content">

        <h1>Olympic Medal Tracker</h1>

        {/* 입력 폼 */}
        <MedalForm
          country={country}
          setCountry={setCountry}
          gold={gold}
          setGold={setGold}
          silver={silver}
          setSilver={setSilver}
          bronze={bronze}
          setBronze={setBronze}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
        />

        {/* 메달 데이터 리스트 */}
        <MedalList medalList={medalList} handleDelete={handleDelete} />

      </div>
    </div>
  )
}

export default App;
