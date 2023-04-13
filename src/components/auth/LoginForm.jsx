import React from 'react'
import { useFormik } from 'formik';
import Card from '../ui/card/Card';

function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log('values ===', values);
        }
    })
// sukurti forma
// email, password
// valdom su useFormik()
// error handling
  return (
    <Card>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"  
                    id='password'
                    name='password'
                    placeholder='Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </Card>
  )
}

export default LoginForm
