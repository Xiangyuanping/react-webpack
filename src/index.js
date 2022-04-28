import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.less';
import './index.less'

const App = () => {
    return (
        <div>
            <div className="photo"></div>
            <span>Hello React</span>
            <Button type="primary">antd</Button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
