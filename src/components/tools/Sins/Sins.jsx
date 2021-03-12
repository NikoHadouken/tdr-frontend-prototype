import React, { useState, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'

import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

import CopyTextBox from '../../CopyTextBox'

import { factors, calculateScore, getResultText } from './sins'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
}))

const Sins = () => {
  const classes = useStyles()

  const [selections, setSelections] = useState({
    location: '',
    pain: '',
    bone_lesion: '',
    alignment: '',
    vertebral_body_collapse: '',
    posterolateral_involvement: '',
  })

  const score = useMemo(() => {
    if (Object.values(selections).includes('')) {
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

  return (
    <>
      <h2>
        SINS <span>(Spinal Instability Neoplastic Score)</span>
      </h2>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={12} lg={8}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Grid container>
              <Grid item xs={12}>
                {/* <h3>{factors.location.title}</h3> */}
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    {factors.location.title}
                  </InputLabel>
                  <Select
                    native
                    value={selections.location}
                    onChange={handleChange}
                    label={factors.location.title}
                    inputProps={{
                      name: 'location',
                      id: 'location',
                    }}
                  >
                    <option aria-label="None" value="" />
                    {Object.values(factors.location.options).map(
                      ({ key, label }) => (
                        <option value={key}>{label}</option>
                      )
                    )}
                  </Select>
                </FormControl>
              </Grid>
              {[
                'pain',
                'bone_lesion',
                'alignment',
                'vertebral_body_collapse',
                'posterolateral_involvement',
              ].map((factorKey) => {
                const { title, options } = factors[factorKey]
                return (
                  <Grid item xs={12} md={6} lg={4} xl={6}>
                    <FormControl
                      component="fieldset"
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
                          ({ key: optionKey, label }) => (
                            <FormControlLabel
                              value={optionKey}
                              control={<Radio />}
                              label={label}
                            />
                          )
                        )}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                )
              })}
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} xl={4}>
          {resultText ? (
            <CopyTextBox title="Auswertung" text={resultText} />
          ) : (
            <Alert severity="info">
              Für eine Auswertung müssen alle Felder ausgefüllt sein.
            </Alert>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default Sins
