import React from 'react';

export default (props) => {
    const { username, password } = props;
    const handleSubmit = (event) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={username} />
            <input type='text' value={password} />
        </form>
    )
}