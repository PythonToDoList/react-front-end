import React, { Component } from 'react';

class Aside extends Component {
    render() {
        return (
            <aside>
                <form method="post">
                    <input type="text" name="title" placeholder="What's the task?"/>
                    <textarea placeholder="task details"></textarea>
                </form>
            </aside>
        )
    }
}