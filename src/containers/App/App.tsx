import React from 'react';
import FormItem from '../../components/UI/FormItem/FormItem';
import Input from '../../components/UI/Input/Input';
import './App.css';

const App = () => {
  return (
    <div>
      <FormItem label="Email">
        <Input placeholder="Hello world..." />
      </FormItem>
    </div>
  );
};

export default App;
