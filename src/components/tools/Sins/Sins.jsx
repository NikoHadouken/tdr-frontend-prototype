import React, { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'

import Autocomplete from '@material-ui/lab/Autocomplete'

import CopyTextBox from '../../CopyTextBox'

import { factors, calculateScore, getResultText } from './sins'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}))

const Sins = () => {
  const classes = useStyles()

  const [selections, setSelections] = useState({
    location: false,
    pain: false,
    bone_lesion: false,
    alignment: false,
    vertebral_body_collapse: false,
    posterolateral_involvement: false,
  })

  const score = useMemo(() => {
    if (Object.values(selections).includes(false)) {
      return null
    }
    return calculateScore(selections)
  }, [selections])

  const resultText = useMemo(() => {
    return score ? getResultText(score, selections) : ''
  }, [score, selections])

  const handleChange = (e) => {
    setSelections({
      ...selections,
      [e.target.name]: e.target.value,
    })
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
      <h2>
        SINS <span>(Spinal Instability Neoplastic Score)</span>
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
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
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">{title}</FormLabel>
              <RadioGroup
                aria-label={factorKey}
                name={factorKey}
                value={selections[factorKey]}
                onChange={handleChange}
              >
                {Object.values(options).map(({ key: optionKey, label }) => (
                  <FormControlLabel
                    value={optionKey}
                    control={<Radio />}
                    label={label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )
        })}
        {resultText ? (
          <CopyTextBox title="Auswertung" text={resultText} />
        ) : (
          <Alert severity="info">
            Für eine Auswertung müssen alle Felder ausgefüllt sein.
          </Alert>
        )}
      </form>
    </>
  )
}

export default Sins
