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

const trimValue = input => {
  return input.value.trim()
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
        onBlur={() => input.onBlur(trimValue(input))}
      />
      { renderError(meta) }
    </div>
  )
}

export const ReduxFormSelect = ({ input, meta, placeholder, options, isLoading, defaultValue, className='' }) => {
  const isDisabled = !options?.length
  const inputClassName = `select ${meta.touched && meta.error ? 'error' : ''} ${className}`.trim()

  const formatGroupLabel = data => (
    <div className="select-grouped-options">
      <span>{ data.avatar }</span>
      <span>{ data.name }</span>
    </div>
  )

  const handleOptionSelected = value => {
    input.onChange(value)
    input.value = value
  }

  if (!placeholder && !input.value) {
    input.value = defaultValue || options[0]
  }

  return (
    <div className="field">
      <Select
        className={ inputClassName }
        placeholder={ placeholder }
        { ...input }
        options={ options }
        formatGroupLabel={ formatGroupLabel }
        isLoading={ isLoading }
        isDisabled={ isDisabled }
        onChange={ (value) => handleOptionSelected(value) }
        onBlur={ () => input.onBlur(input.value) }
      />
    </div>
  )
}