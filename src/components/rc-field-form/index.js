import React from 'react'

import Form from './Form'
import Field from './Field'
import useForm from './useForm'

const _Form = React.forwardRef(Form)
_Form.useForm = useForm
_Form.Field = Field

export { Field, useForm }

export default _Form
