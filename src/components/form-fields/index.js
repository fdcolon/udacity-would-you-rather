import React from 'react'
import Select from 'react-select'

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="error-message">
        { error }
      </div>
    )
  }
}

export const ReduxFormInput = ({ input, meta, placeholder, type='text', autoFocus=false, autoComplete='off' }) => {
  let statusClass = ''

  if (meta.touched && meta.error) {
    statusClass = 'error'
  } else if (meta.touched && !meta.error) {
    statusClass = 'ok'
  }

  const inputClassName = `input ${statusClass}`.trim()

  return (
    <div className="field">
      <input
        className={ inputClassName }
        type={ type }
        placeholder={ placeholder }
        autoComplete={ autoComplete }
        { ...input }
        autoFocus={ autoFocus }
        onBlur={() => input.onBlur(input.value.trim())}
      />
      { renderError(meta) }
    </div>
  )
}

export const ReduxFormSelect = ({
  input,
  meta,
  placeholder,
  options,
  isClearable,
  maxMenuHeight='8rem',
  defaultValue,
  className=''
}) => {
  const isDisabled = !options?.length
  let statusClass = ''

  if (meta.touched && meta.error) {
    statusClass = 'error'
  } else if (meta.touched && !meta.error) {
    statusClass = 'ok'
  }

  const inputClassName = `select ${statusClass} ${className}`.trim()

  const handleOptionSelected = value => {
    input.onChange(value)
    input.value = value
  }

  if (!input.value) {
    if (defaultValue) {
      input.value = defaultValue
    } else if (!placeholder && !input.value) {
      input.value = options[0].value
    }
  }

  const customStyles = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: 'none'
    })
  }

  return (
    <div className="field">
      <Select
        className={ inputClassName }
        placeholder={ placeholder }
        { ...input }
        options={ options }
        isClearable={ isClearable }
        isDisabled={ isDisabled }
        onChange={ (value) => handleOptionSelected(value) }
        onBlur={ () => input.onBlur(input.value) }
        maxMenuHeight={ maxMenuHeight }
        styles={ customStyles }
      />
      { renderError(meta) }
    </div>
  )
}