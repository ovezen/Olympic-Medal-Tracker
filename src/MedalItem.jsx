import React from 'react';

// 리스트의 개별 항목 + 삭제 버튼
function MedalItem({ entry, onDelete }) {
    return (
        <tr>
            <td>{entry.country}</td>
            <td>{entry.gold}</td>
            <td>{entry.silver}</td>
            <td>{entry.bronze}</td>
            <td>
                <button onClick={onDelete}>삭제</button>
            </td>
        </tr>
    )
}

export default MedalItem;