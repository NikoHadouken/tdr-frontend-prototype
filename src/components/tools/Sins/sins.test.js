import { calculateScore } from './sins'

const scoreMax = {
  location: 'c1',
  pain: 'mechanical',
  bone_lesion: 'lytic',
  alignment: 'translation',
  vertebral_body_collapse: 'gt_half',
  posterolateral_involvement: 'bilateral',
}

test('score value equals sum of all factor points', () => {
  const score = calculateScore(scoreMax)
  expect(score.value).toBe(18)
})

test('score greater 13 is unstable', () => {
  const score = calculateScore(scoreMax)
  expect(score.key).toBe('unstable')
})
