export const factors = {
  location: {
    title: 'Wirbelsäulensegement',
    options: {
      occiput: { key: 'occiput', label: 'Occiput', points: 3 },
      c1: { key: 'c1', label: 'C 1', points: 3 },
      c2: { key: 'c2', label: 'C 2', points: 3 },
      c3: { key: 'c3', label: 'C 3', points: 2 },
      c4: { key: 'c4', label: 'C 4', points: 2 },
      c5: { key: 'c5', label: 'C 5', points: 2 },
      c6: { key: 'c6', label: 'C 6', points: 2 },
      c7: { key: 'c7', label: 'C 7', points: 3 },
      th1: { key: 'th1', label: 'Th 1', points: 3 },
      th2: { key: 'th2', label: 'Th 2', points: 3 },
      th3: { key: 'th3', label: 'Th 3', points: 1 },
      th4: { key: 'th4', label: 'Th 4', points: 1 },
      th5: { key: 'th5', label: 'Th 5', points: 1 },
      th6: { key: 'th6', label: 'Th 6', points: 1 },
      th7: { key: 'th7', label: 'Th 7', points: 1 },
      th8: { key: 'th8', label: 'Th 8', points: 1 },
      th9: { key: 'th9', label: 'Th 9', points: 1 },
      th10: { key: 'th10', label: 'Th 10', points: 1 },
      th11: { key: 'th11', label: 'Th 11', points: 3 },
      th12: { key: 'th12', label: 'Th 12', points: 3 },
      l1: { key: 'l1', label: 'L 1', points: 3 },
      l2: { key: 'l2', label: 'L 2', points: 2 },
      l3: { key: 'l3', label: 'L 3', points: 2 },
      l4: { key: 'l4', label: 'L 4', points: 2 },
      l5: { key: 'l5', label: 'L 5', points: 3 },
      s1: { key: 's1', label: 'S 1', points: 3 },
      s2_5: { key: 's2_5', label: 'S 2-5', points: 0 },
    },
  },

  pain: {
    title: 'Schmerz',
    options: {
      mechanical: {
        key: 'mechanical',
        label: 'bewegungsabhängig',
        points: 3,
      },
      none_mechanical: {
        key: 'none_mechanical',
        label: 'intermittierend, aber nicht bewegungsabhängig',
        points: 2,
      },
      no_pain: {
        key: 'no_pain',
        label: 'kein Schmerz',
        points: 1,
      },
      unknown: {
        key: 'unknown',
        label: 'unbekannt',
        points: 1,
      },
    },
  },

  bone_lesion: {
    title: 'Dichte der Läsion',
    options: {
      lytic: {
        key: 'lytic',
        label: 'osteolytisch',
        points: 2,
      },
      mixed: {
        key: 'mixed',
        label: 'gemischt',
        points: 1,
      },
      blastic: {
        key: 'blastic',
        label: 'osteoplastisch',
        points: 0,
      },
    },
  },

  alignment: {
    title: 'Alignment',
    options: {
      translation: {
        key: 'translation',
        label: 'Subluxation / Translation',
        points: 4,
      },
      deformity: {
        key: 'deformity',
        label: 'De novo Deformität (kyphotisch/skoliotisch)',
        points: 2,
      },
      normal: {
        key: 'normal',
        label: 'normales Alignment',
        points: 0,
      },
    },
  },

  vertebral_body_collapse: {
    title: 'Höhenminderung der Zwischenwirbelräume',
    options: {
      gt_half: {
        key: 'gt_half',
        label: '> 50%',
        points: 3,
      },
      lt_half: {
        key: 'lt_half',
        label: '< 50%',
        points: 2,
      },
      none_but_mostly_affected: {
        key: 'none_but_mostly_affected',
        label: 'keine, aber > 50 % des WK betroffen',
        points: 1,
      },
      none: {
        key: 'none',
        label: 'keine',
        points: 0,
      },
    },
  },

  posterolateral_involvement: {
    title: 'Beteiligung dorsaler Wirbelstrukturen',
    options: {
      bilateral: {
        key: 'bilateral',
        label: 'bilateral',
        points: 3,
      },
      unilateral: {
        key: 'unilateral',
        label: 'unilateral',
        points: 1,
      },
      none: {
        key: 'none',
        label: 'keine',
        points: 0,
      },
    },
  },
}

const conditions = [
  {
    key: 'unstable',
    match: (sum) => sum >= 13,
  },

  {
    key: 'unstable_with_any_pain',
    match: (sum, selections) => selections.pain === 'unknown' && sum === 12,
  },

  {
    key: 'unstable_with_mechanical_pain',
    match: (sum, selections) => selections.pain === 'unknown' && sum === 11,
  },

  {
    key: 'potentially_unstable',
    match: (sum) => sum >= 7,
  },

  {
    key: 'potentially_unstable_with_any_pain',
    match: (sum, selections) => selections.pain === 'unknown' && sum === 6,
  },

  {
    key: 'potentially_unstable_with_mechanical_pain',
    match: (sum, selections) => selections.pain === 'unknown' && sum === 5,
  },

  {
    key: 'stable',
    match: () => true,
  },
]

export const calculateScore = (selections) => {
  const value = Object.entries(selections).reduce(
    (acc, [factorKey, optionKey]) => {
      const option = factors[factorKey].options[optionKey]
      return acc + option.points
    },
    0
  )

  const { key } = conditions.find((cond) => cond.match(value, selections))

  return {
    key,
    value,
  }
}
