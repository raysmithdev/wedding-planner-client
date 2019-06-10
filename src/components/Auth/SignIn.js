import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { API_BASE_URL } from '../../config'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function SignIn(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleSubmit = name => event => {
    fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(({ authToken }) => {
      localStorage.setItem('authToken', authToken)
      props.history.push('/dashboard')
    })
    .catch(error => console.log(error))
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Username"
        className={classes.textField}
        value={values.username}
        onChange={handleChange('username')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Password"
        type="password"
        className={classes.textField}
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"
      />
      <Button onClick={handleSubmit()} variant="outlined" color="primary" className={classes.button}>
        Signin
      </Button>
    </form>
  )
}

export default SignIn
