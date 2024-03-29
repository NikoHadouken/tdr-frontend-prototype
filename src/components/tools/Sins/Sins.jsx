import React, { useState, useMemo } from 'react'
import {
  Alert,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material'

import CopyTextBox from '@/components/CopyTextBox'
import VertebraSelect from '@/components/VertebraSelect'

import { factors, calculateScore, getResultText } from './sins'

const Sins = () => {
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

  const handleVertebraSelect = (key) => {
    if (!Object.keys(factors.location.options).includes(key)) {
      return
    }
    setSelections({
      ...selections,
      location: key,
    })
  }

  return (
    <>
      <h2>
        SINS <span>(Spinal Instability Neoplastic Score)</span>
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              sx={{
                margin: 3,
              }}
            >
              <VertebraSelect
                height="600"
                onClick={handleVertebraSelect}
                selected={selections.location}
              />
              <FormControl variant="outlined">
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
                  <option key="none" aria-label="None" value="" />
                  {Object.values(factors.location.options).map(
                    ({ key, label }) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    )
                  )}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Grid container>
              {[
                'pain',
                'bone_lesion',
                'alignment',
                'vertebral_body_collapse',
                'posterolateral_involvement',
              ].map((factorKey) => {
                const { title, options } = factors[factorKey]
                return (
                  <Grid item key={factorKey} xs={12} sm={12} md={6} lg={4}>
                    <FormControl
                      component="fieldset"
                      sx={{
                        margin: 3,
                        minWidth: 120,
                      }}
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
                              key={optionKey}
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
          </Grid>
        </Grid>
      </form>
      {resultText ? (
        <CopyTextBox title="Auswertung" text={resultText} />
      ) : (
        <Alert severity="info">
          Für eine Auswertung müssen alle Felder ausgefüllt sein.
        </Alert>
      )}
    </>
  )
}

export default Sins
