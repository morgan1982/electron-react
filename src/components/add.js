import React from 'react';

const Add = () => (
    <div>
        <h1 className="add">New Record</h1>
        <form action="#">
            <div className="btn-container">
                <label htmlFor="#">App</label>

                <input type="text"/>
                <button id="import" type="submit">import</button>
            </div>
        </form>
    </div>
)

export default Add;