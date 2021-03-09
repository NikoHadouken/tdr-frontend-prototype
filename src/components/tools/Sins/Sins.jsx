import React, { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

import { factors, calculateScore } from './sins'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}))

const Sins = () => {
  const classes = useStyles()
  const [error, setError] = React.useState(false)

  const [selections, setSelections] = useState({
    location: false,
    pain: false,
    bone_lesion: false,
    alignment: false,
    vertebral_body_collapse: false,
    posterolateral_involvement: false,
  })

  const handleChange = (e) => {
    setSelections({
      ...selections,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(selections)
    try {
      const score = calculateScore(selections)
      console.log(score)
    } catch (err) {
      setError(err)
    }
  }

  const handleLocationChange = (_e, option) => {
    if (!option) return
    setSelections({
      ...selections,
      location: option.key,
    })
  }

  return (
    <>
      <h1>
        SINS <span>(Spinal Instability Neoplastic Score)</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          name="location"
          onChange={handleLocationChange}
          // value={selections.location}
          options={Object.values(factors.location.options)}
          getOptionLabel={(option) => option.label}
          getOptionSelected={(option, val) => option.key === val.key}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={factors.location.title}
              variant="outlined"
            />
          )}
        />
        {[
          'pain',
          'bone_lesion',
          'alignment',
          'vertebral_body_collapse',
          'posterolateral_involvement',
        ].map((factorKey) => {
          const { title, options } = factors[factorKey]
          return (
            <FormControl
              component="fieldset"
              error={error}
              className={classes.formControl}
            >
              <FormLabel component="legend">{title}</FormLabel>
              <RadioGroup
                aria-label={factorKey}
                name={factorKey}
                value={selections[factorKey]}
                onChange={handleChange}
              >
                {Object.values(options).map(
                  ({ key: optionKey, label, points }) => (
                    <FormControlLabel
                      value={optionKey}
                      control={<Radio />}
                      label={label}
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
          )
        })}

        <FormHelperText>helper text</FormHelperText>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Auswerten
        </Button>
      </form>
    </>
  )
}

export default Sins
