import React, {ChangeEvent} from 'react';
import './App.css';
import QRCode from 'qrcode.react';

const App: React.FC = () => {
  const [qrValue, setQRValue] = React.useState('');

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setQRValue(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          className='App-input'
          type={'text'}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>handleChange(e)}
          placeholder={'QRCodeにしたいテキストを入力'}
        />
        <QRCode value={qrValue}/>
      </header>
    </div>
  );
}

export default App;
