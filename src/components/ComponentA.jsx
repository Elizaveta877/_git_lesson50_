import React, { useCallback, useMemo, useState } from 'react';

 const DarkModeButton = React.memo(({ onClick, isDark }) => {
    console.log('DarkModeButton re-rendered');
    return (
        <button onClick={onClick}>
            Змінити тему (зараз: {isDark ? 'темна' : 'світла'})
        </button>
    );
 });



const allUsers = Array.from({ length: 1000 }, (_, i) => ({ id: i + 1, name: `User ${i + 1}` }));

function UserSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const filteredUsers = useMemo(() => {
        return allUsers.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);
    

    const toggleTheme = useCallback(() => {
        setIsDarkMode(prev => !prev);

    },[]);


    return (
        <div style={{
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            minHeight: '100vh',
            padding: '20px',
            width: '100vw',
            boxSizing: 'border-box',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h2>User Search</h2>

            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <DarkModeButton onClick={toggleTheme} isDark={isDarkMode} />
            <p>Кількість знайдених користувачів: {filteredUsers.length}</p>

            <ul>
                {filteredUsers.slice(0, 20).map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>


        </div>
    )
}
export default UserSearch;