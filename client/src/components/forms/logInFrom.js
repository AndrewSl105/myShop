import React from 'react'
import { InputText } from 'primereact/inputtext';
import './logInForm.sass'
import { Button } from 'primereact/button';

const LogInForm = () => {
    return (
        <form>
            <InputText placeholder='log-in'  />
            <InputText placeholder='e-mail'   />
            <InputText placeholder='password'  />
            <Button variant="contained" color="primary">
                Next
            </Button>
        </form>
    )
}

export default LogInForm
