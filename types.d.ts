type ElectronMethods = {
  logData: () => void
  logInvoke: () => Promise
}

type ElectronMethodsKeys = keyof ElectronMethods

interface Window {
  electronMethods: ElectronMethods,
} 
