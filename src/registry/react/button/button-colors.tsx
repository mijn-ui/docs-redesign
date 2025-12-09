import { Button } from '@mijn-ui/react'

const ButtonColors = () => {
  return (
  <div className="flex justify-center gap-4 flex-wrap w-full">
    <Button color="default">Default</Button>
    <Button color="brand">Brand</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="inverse">Inverse</Button>
  </div>
  )
}

export default ButtonColors
