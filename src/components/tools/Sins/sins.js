export const factors = {
  segment: {
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
      movement_dependent: {
        key: 'movement_dependent',
        label: 'bewegungsabhängig',
        points: 2,
      },
      intermittent: {
        key: 'intermittent',
        label: 'intermittierend, aber nicht bewegungsabhängig',
        points: 1,
      },
      no_pain: {
        key: 'no_pain',
        label: 'kein Schmerz',
        points: 0,
      },
      unknown: {
        key: 'unknown',
        label: 'unbekannt',
        points: 0,
      },
    },
  },
  lesion_density: {
    title: 'Dichte der Läsion',
    options: {
      osteolytic: {
        key: 'osteolytic',
        label: 'osteolytisch',
        points: 2,
      },
      mixed: {
        key: 'mixed',
        label: 'gemischt',
        points: 1,
      },
      osteoplastic: {
        key: 'osteoplastic',
        label: 'osteoplastisch',
        points: 0,
      },
    },
  },

  alignment: {
    title: 'Alignment',
    options: {
      displaced: {
        key: 'displaced',
        label: 'Subluxation / Translation',
        points: 4,
      },
      deformed: {
        key: 'deformed',
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

  space_reduction: {
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

  dorsal_involvement: {
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
