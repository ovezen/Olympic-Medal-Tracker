import React from 'react';
import MedalItem from './MedalItem';

// 메달 리스트 전체
function MedalList({ medalList, handleDelete }) {
    return (
        <div className="medal-list">
            <h2>Medal List</h2>

            <table>
                <thead>
                    <tr>
                        <td>국가명</td>
                        <td>금메달</td>
                        <td>은메달</td>
                        <td>동메달</td>
                        <td>버튼</td>
                    </tr>
                </thead>
                <tbody>
                    {medalList.map((entry, index) => (
                        <MedalItem key={index} entry={entry} onDelete={() => handleDelete(index)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MedalList;