import React from 'react'
import { Scene, Stack, Actions as RouterActions } from 'react-native-router-flux'

import Restaurant from './views/Restaurant'
import Distance from './views/Distance'
import Money from './views/Money'
import Results from './views/Results'

export default (
  <Stack key="root">
    <Scene key="restaurant" component={Restaurant} title="Restaurant" />
    <Scene key="distance" back onBack={RouterActions.pop} component={Distance} title="Distance" />
    <Scene key="money" back onBack={RouterActions.pop} component={Money} title="Money" initial init />
    <Scene key="results" back onBack={RouterActions.pop} component={Results} title="Results" />
  </Stack>
)