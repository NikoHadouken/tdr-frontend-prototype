import React, { useState } from 'react'
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

import { factors } from './sins'

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

  const [selection, setSelection] = useState({
    segment: false,
    pain: false,
    lesion_density: false,
    alignment: false,
    space_reduction: false,
    dorsal_involvement: false,
  })

  const handleRadioChange = (e) => {
    setSelection({
      ...selection,
      pain: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(selection)
  }

  // const segmentOptions = Object.entries(
  //   factors.segment.options
  // ).map(([key, val]) => ({ key, label: val.label }))
  const segmentOptions = Object.values(factors.segment.options)

  const options = Object.values(factors.pain.options)

  const handleSegmentChange = (_e, option) => {
    if (!option) return
    setSelection({
      ...selection,
      segment: option.key,
    })
  }

  return (
    <>
      <h1>
        SINS <span>(Spinal Instability Neoplastic Score)</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          name="segment"
          onChange={handleSegmentChange}
          // value={selection.segment}
          options={segmentOptions}
          getOptionLabel={(option) => option.label}
          getOptionSelected={(option, val) => option.key === val.key}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Wirbelsäulensegement"
              variant="outlined"
            />
          )}
        />
        <FormControl
          component="fieldset"
          error={error}
          className={classes.formControl}
        >
          <FormLabel component="legend">Schmerz</FormLabel>
          <RadioGroup
            aria-label="pain"
            name="pain"
            value={selection.pain}
            onChange={handleRadioChange}
          >
            {options.map((option) => (
              <FormControlLabel
                value={option.key}
                control={<Radio />}
                label={`${option.label} (${option.points} Punkte)`}
              />
            ))}
          </RadioGroup>
          <FormHelperText>helper text</FormHelperText>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Auswerten
          </Button>
        </FormControl>
      </form>
    </>
  )
}

export default Sins
