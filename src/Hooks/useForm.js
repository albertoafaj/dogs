import React from 'react'

const types = {
    email: {
       regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
       ,
       message: 'preencha um email válido',
    },
    password: {
       regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
       ,
       message: 'A senha deve ter pelo no mínimo 8 caracteres, ao menos um número, uma letra maiuscula e uma minuscula',
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números.'
    }
    
}

const useForm = (type) => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if(type === false) return true;
        if(value.length === 0){
            setError('preencha um valor')
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false;
        } else {
            setError(null);
            return true
        }
    }


    function onChange({ target }) {
        if(error) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: ()=> validate(value),
    }

}

export default useForm;