import React from 'react';
import classes from './Login.module.css';
import FormItem from '../../components/UI/FormItem/FormItem';
import Input from '../../components/UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const Login = () => {
  return (
    <Card className={classes.login} cardHeader="Login">
      <form>
        <FormItem label="Email">
          <Input type="email" placeholder="Enter email here..." />
        </FormItem>
        <FormItem label="Password">
          <Input type="password" placeholder="Enter password here..." />
        </FormItem>
        <Button>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
