import { useEffect, useState } from 'react'
import TableTemplate from '../../Templates/Table'
import { Contract } from '../../../../types'
import BaseTemplate from '../../Templates/Base'

const OverduedContracts = () => {
  const [contracts, setContracts] = useState<Array<Contract> | undefined>()

  useEffect(() => {
    window.api.getOverduedContracts().then((overdued) => setContracts(overdued))
  }, [])

  return (
    <BaseTemplate>
      <TableTemplate
        title='Contratos vencidos'
        data={contracts}
      />
    </BaseTemplate>
  )
}

export default OverduedContracts
