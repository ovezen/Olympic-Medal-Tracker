import React from 'react';

// 입력 폼
function MedalForm({ country, setCountry, gold, setGold, silver, setSilver, bronze, setBronze, handleSubmit, handleUpdate }) {
    return (<form onSubmit={handleSubmit} className="input-group">
        <div className="input-field">
            <label>국가명</label>
            <input
                type="text"
                placeholder="국가 입력"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
            />
        </div>
        <div className="input-field">
            <label>금메달</label>
            <input
                type="number"
                placeholder="0"
                value={gold}
                onChange={(e) => setGold(e.target.value)}
                min="0"
                max="99"
                required
            />
        </div>
        <div className="input-field">
            <label>은메달</label>
            <input
                type="number"
                placeholder="0"
                value={silver}
                onChange={(e) => setSilver(e.target.value)}
                min="0"
                max="99"
                required
            />
        </div>
        <div className="input-field">
            <label>동메달</label>
            <input
                type="number"
                placeholder="0"
                value={bronze}
                onChange={(e) => setBronze(e.target.value)}
                min="0"
                max="99"
                required
            />
        </div>

        <div className="button-group">
            <button type="submit">국가 추가</button>
            <button type="button" onClick={handleUpdate}>업데이트</button>
        </div>
    </form>
    );
}

export default MedalForm;